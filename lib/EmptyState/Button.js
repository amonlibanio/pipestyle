"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("../Button"));

var EmptyStateButton = function EmptyStateButton(_ref) {
  var children = _ref.children,
      className = _ref.className,
      dataTestid = _ref.dataTestid,
      buttonProps = (0, _objectWithoutProperties2["default"])(_ref, ["children", "className", "dataTestid"]);
  return _react["default"].createElement(_Button["default"], (0, _extends2["default"])({
    "data-testid": dataTestid,
    className: (0, _classnames["default"])('pp-empty-state-button', className),
    size: "sm"
  }, buttonProps), children);
};

EmptyStateButton.defaultProps = {
  dataTestid: 'empty-state-button'
};
var _default = EmptyStateButton;
exports["default"] = _default;