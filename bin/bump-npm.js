const semver = require('semver')
const currentVersion = require('../package.json').version;
const exec = require('child_process').exec;

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

function updateVersion(newVersion, callback) {
  exec(`npm version "${newVersion}" -m "[CI SKIP] bump package version"`, (error, stdout, stderr) => {
    if (error) {
      console.error(`exec error: ${error}`);
      return;
    }
    console.log(stdout);
    console.error(stderr);

    callback()
  });
}

function main() {
  if (!process.env.CI_COMMIT_TITLE) {
    throw new Error('Env var CI_COMMIT_TITLE is required');
  }

  if (!process.env.CI_COMMIT_SHA) {
    throw new Error('Env var CI_COMMIT_SHA is required');
  }

  if (process.env.DEPLOY_BETA === 'true') {
    const betaVersion = currentVersion+ '-beta-' +  process.env.CI_COMMIT_SHA;
    updateVersion(betaVersion, () => {
      console.log('\n\nBeta version: ' + betaVersion + '\n\n')
    })

  } else {
    const finalVersion = semver.inc(currentVersion, releaseType(process.env.CI_COMMIT_TITLE));
    updateVersion(finalVersion, () => {
      console.log('\n\nFinal version: ' + finalVersion + '\n\n')
    })
  }
}

main()
