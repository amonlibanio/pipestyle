"use strict";

exports.__esModule = true;
exports.removeInProgressFiles = exports.isEmpty = exports.getThumbnailIcon = exports.isImage = void 0;

var _constants = require("./constants");

var isImage = function isImage(filename) {
  return filename && filename.match(/\.(tif|tiff|gif|jpeg|jpg|jif|jfif|jp2|jpx|j2k|j2c|png|bmp|webp|heif|svg)$/gim);
};

exports.isImage = isImage;

var getThumbnailIcon = function getThumbnailIcon(_ref) {
  var name = _ref.name,
      preview = _ref.preview,
      url = _ref.url;
  var path = _constants.FieldTypeAttachmentUrls["default"];

  if (isImage(name) && url !== null && url !== undefined && url !== '') {
    path = url;
  } else if (preview !== null && preview !== undefined && preview !== '') {
    path = preview;
  } else {
    Object.keys(_constants.FieldTypeAttachmentUrls).forEach(function (extension) {
      if (name.match(extension)) {
        path = _constants.FieldTypeAttachmentUrls[extension];
      }
    });
  }

  return path;
};

exports.getThumbnailIcon = getThumbnailIcon;

var isEmpty = function isEmpty(array) {
  return array === null || array === undefined || array.length === 0;
};

exports.isEmpty = isEmpty;

var removeInProgressFiles = function removeInProgressFiles(files) {
  return files.filter(function (file) {
    return file.progress === undefined;
  });
};

exports.removeInProgressFiles = removeInProgressFiles;