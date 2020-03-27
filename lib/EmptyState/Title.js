"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var EmptyStateTitle = function EmptyStateTitle(_ref) {
  var children = _ref.children,
      size = _ref.size,
      className = _ref.className;
  return _react["default"].createElement("h2", {
    className: (0, _classnames["default"])('pp-empty-state-title', "pp-empty-state-title-".concat(size), className)
  }, children);
};

EmptyStateTitle.defaultProps = {
  size: 'lg'
};
var _default = EmptyStateTitle;
exports["default"] = _default;