"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Anchor = _interopRequireDefault(require("../../Anchor"));

var _utils = require("../utils");

var Attachment = function Attachment(_ref) {
  var _ref$file = _ref.file,
      name = _ref$file.name,
      url = _ref$file.url,
      preview = _ref$file.preview,
      progress = _ref$file.progress,
      error = _ref$file.error,
      onClick = _ref.onClick,
      onRemove = _ref.onRemove;
  var iconUrl = preview || (0, _utils.getThumbnailIcon)({
    name: name,
    url: url
  });
  return React.createElement("div", {
    className: "pp-attachment-item",
    "data-testid": "attachment-item"
  }, React.createElement(_Anchor["default"], {
    id: "open-attachment-gallery",
    className: "pp-attachment-file",
    href: url,
    target: "_blank",
    onClick: progress === undefined && error === undefined ? onClick : undefined
  }, React.createElement("div", {
    className: "pp-attachment-ico pp-attachment-thumbnail",
    style: {
      backgroundImage: "url(".concat(iconUrl, ")")
    }
  }), React.createElement("div", {
    className: "pp-ellipsis"
  }, name, progress !== undefined && React.createElement("div", {
    className: "pp-progress-bar"
  }, React.createElement("span", {
    style: {
      width: "".concat(progress, "%")
    }
  })), React.createElement("div", {
    className: "pp-color-danger pp-font-size-small pp-font-regular"
  }, error))), React.createElement("div", {
    className: "pp-attachment-actions"
  }, progress === undefined && React.createElement(_Anchor["default"], {
    id: "download-attachment",
    className: "pp-ico-download",
    href: url,
    target: "_blank",
    title: "Download attachment"
  }), onRemove && React.createElement(_Anchor["default"], {
    id: "delete-attachment",
    className: "pp-ico-close",
    onClick: onRemove,
    title: "Delete attachment"
  })));
};

var _default = Attachment;
exports["default"] = _default;