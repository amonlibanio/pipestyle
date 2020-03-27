"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var EmptyStateIcon = function EmptyStateIcon(_ref) {
  var className = _ref.className,
      icon = _ref.icon,
      roundBorder = _ref.roundBorder;
  return _react["default"].createElement("div", {
    "data-testid": "empty-state-icon-container",
    className: (0, _classnames["default"])('pp-empty-state-icon', className, {
      'pp-empty-state-icon-round-border': roundBorder
    })
  }, _react["default"].createElement(_Icon["default"], {
    className: (0, _classnames["default"])("pp-ico-".concat(icon))
  }));
};

EmptyStateIcon.defaultProps = {
  roundBorder: true
};
var _default = EmptyStateIcon;
exports["default"] = _default;