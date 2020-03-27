"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var EmptyStateDescription = function EmptyStateDescription(_ref) {
  var children = _ref.children,
      className = _ref.className;
  return _react["default"].createElement("p", {
    className: (0, _classnames["default"])('pp-empty-state-description', className)
  }, children);
};

var _default = EmptyStateDescription;
exports["default"] = _default;