"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var EmptyStateVideo = function EmptyStateVideo(_ref) {
  var className = _ref.className,
      src = _ref.src;
  return _react["default"].createElement("video", {
    className: (0, _classnames["default"])('pp-empty-state-video', className),
    src: src,
    autoPlay: true,
    loop: true
  });
};

var _default = EmptyStateVideo;
exports["default"] = _default;