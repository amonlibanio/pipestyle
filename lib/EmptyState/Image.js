"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var EmptyStateImage = function EmptyStateImage(_ref) {
  var className = _ref.className,
      alt = _ref.alt,
      src = _ref.src;
  return _react["default"].createElement("img", {
    className: (0, _classnames["default"])('pp-empty-state-image', className),
    alt: alt,
    src: src
  });
};

var _default = EmptyStateImage;
exports["default"] = _default;