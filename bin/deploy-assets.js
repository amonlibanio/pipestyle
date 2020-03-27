const path = require('path');
const fs = require('fs');
const glob = require('fast-glob');
const dotenv = require('dotenv');
const mime = require('mime');
const semver = require('semver');
const execSync = require('child_process').execSync;
const _ = require('lodash');
const AWS = require('aws-sdk');

const OLD_S3_BUCKET = 'pipestyle';
const NEW_S3_BUCKET = 'pipestyle.staticpipefy.com';
const DOTENV_FILE_BANNER = '# DO NOT CHANGE THIS FILE\n# IT IS UPDATED AUTOMATICALLY BY THE DEPLOY SCRIPT\n';

const FILES_TO_UPLOAD = [
  {
    pattern: 'public/assets/stylesheets/*.css*',
    prefix: 'assets/stylesheets',
  },
  {
    pattern: 'public/assets/javascripts/**/*.js*',
    prefix: 'assets/javascripts',
  },
  {
    pattern: 'public/assets/images/*.*',
    prefix: 'assets/images',
  },
  {
    pattern: 'public/assets/images/sidebar/*.*',
    prefix: 'assets/images/sidebar',
  },
  {
    pattern: 'public/assets/images/emails/*.*',
    prefix: 'assets/images/emails',
  },
  {
    pattern: 'public/assets/images/apps/*.*',
    prefix: 'assets/images/apps',
  },
  {
    pattern: 'public/assets/stylesheets/fonts/pipeicon/*.*',
    prefix: 'assets/stylesheets/fonts/pipeicon',
  },
  {
    pattern: 'public/assets/stylesheets/fonts/templates/*.*',
    prefix: 'assets/stylesheets/fonts/templates',
  },
];

function log(version, message) {
  console.log(`\n[Pipestyle ${version}] step: ${message}`);
}

function releaseType(commitTitle) {
  if (commitTitle.includes('[version: major]')) {
    return 'major';
  }
  if (commitTitle.includes('[version: minor]')) {
    return 'minor';
  }
  if (commitTitle.includes('[version: patch]')) {
    return 'patch';
  }

  return 'patch';
}

function bumpVersion() {
  if (!process.env.CI_COMMIT_TITLE) {
    throw new Error('Env var CI_COMMIT_TITLE is required');
  }

  if (!process.env.CI_COMMIT_SHA) {
    throw new Error('Env var CI_COMMIT_SHA is required');
  }

  const dotenvFile = '.env.production';
  const envConfig = dotenv.parse(fs.readFileSync(dotenvFile));

  if (process.env.DEPLOY_BETA === 'true') {
    const betaVersion = envConfig.PIPESTYLE_VERSION + '-beta-' + process.env.CI_COMMIT_SHA;
    fs.writeFileSync(dotenvFile, DOTENV_FILE_BANNER + 'PIPESTYLE_VERSION=' + betaVersion + '\n');

    return betaVersion;
  } else {
    const finalVersion = semver.inc(
      envConfig.PIPESTYLE_VERSION,
      releaseType(process.env.CI_COMMIT_TITLE)
    );
    fs.writeFileSync(dotenvFile, DOTENV_FILE_BANNER + 'PIPESTYLE_VERSION=' + finalVersion + '\n');

    return finalVersion;
  }
}

function isNewVersion(version) {
  console.log(`Checking if tag ${version} already exists ...`);
  const existingTags = execSync('git fetch --tags; git tag');

  return !existingTags
    .toString()
    .split('\n')
    .includes(version);
}

function addBannerOnAssets(version) {
  log(version, 'Writting version...');

  const files = [
    'public/assets/stylesheets/components.css',
    'public/assets/stylesheets/pipestyle.css',
    'public/assets/stylesheets/platform-apps.css',
    'public/assets/stylesheets/template-icons.css',
    'public/assets/stylesheets/libs.css',
    'public/assets/javascripts/pipestyle.js',
  ];

  const banner = `/*! \n * Pipestyle ${version} (http://pipefy.style) \n * Pipefy, Inc. (https://pipefy.com)  \n */ \n`;

  files.forEach(file => {
    const content = fs.readFileSync(file);
    fs.writeFileSync(file, banner + content);
  });

  log(version, 'Versions Written.');
}

function s3Upload(s3, params) {
  return new Promise((resolve, reject) => {
    s3.upload(params, (err, data) => {
      if (err) {
        reject(err);
        return;
      }

      resolve(data);
    });
  });
}

async function uploadFile(s3, { filePath, mimeType, uploadPath }) {
  console.log(`-> ${mimeType} : ${filePath}`);

  const fileContent = fs.readFileSync(filePath);

  const baseParams = {
    ACL: 'public-read',
    Body: fileContent,
    ContentType: mimeType,
    Key: uploadPath,
  };

  const dataOldBucket = await s3Upload(s3, { ...baseParams, Bucket: OLD_S3_BUCKET });
  console.log(`File uploaded successfully. ${dataOldBucket.Location}`);

  const dataNewBucket = await s3Upload(s3, { ...baseParams, Bucket: NEW_S3_BUCKET });
  console.log(`File uploaded successfully. ${dataNewBucket.Location}`);
}

async function upload(version) {
  if (!process.env.PIPEASSETS_S3_ACCESS_KEY_ID) {
    throw new Error('Env var PIPEASSETS_S3_ACCESS_KEY_ID is required');
  }

  if (!process.env.PIPEASSETS_S3_SECRET_ACCESS_KEY) {
    throw new Error('Env var PIPEASSETS_S3_SECRET_ACCESS_KEY is required');
  }

  const s3 = new AWS.S3({
    region: 'us-east-1',
    accessKeyId: process.env.PIPEASSETS_S3_ACCESS_KEY_ID,
    secretAccessKey: process.env.PIPEASSETS_S3_SECRET_ACCESS_KEY,
  });

  log(version, 'Uploading files to S3...');

  const uploads = _.flatMap(FILES_TO_UPLOAD, ({ pattern, prefix }) => {
    const files = glob.sync(pattern);

    return files.map(filePath => {
      const mimeType = mime.getType(filePath);
      const uploadPath = path.join(version, prefix, path.basename(filePath));

      return { mimeType, uploadPath, filePath };
    });
  });

  await Promise.all(uploads.map(upload => uploadFile(s3, upload)));

  log(version, 'Upload done.');
}

function tagVersion(version) {
  console.log(execSync(`git commit -am '[skip ci] bump assets version'`));
  console.log(execSync(`git tag -a ${version} -m ''; git push --tags`));
}

async function main() {
  try {
    const version = bumpVersion();

    if (isNewVersion(version)) {
      addBannerOnAssets(version);
      await upload(version);

      if (!version.includes('beta')) {
        tagVersion(version);
      }

      console.log(`\n\nPipestyle version: ${version}\n\n`);
    } else {
      console.log(
        `THIS VERSION ${version} ALREADY EXISTS, PLEASE CHANGE ON .env.production (set PIPESTYLE_VERSION)`
      );
    }
  } catch (err) {
    console.error(err);
  }
}

main();
