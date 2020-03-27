"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Anchor = _interopRequireDefault(require("../Anchor"));

var TabItem = function TabItem(props) {
  var icon = props.icon,
      isActive = props.isActive,
      children = props.children,
      className = props.className,
      anchor = (0, _objectWithoutProperties2["default"])(props, ["icon", "isActive", "children", "className"]);
  return React.createElement("li", null, React.createElement(_Anchor["default"], (0, _extends2["default"])({}, anchor, {
    className: (0, _classnames["default"])(className, (0, _defineProperty2["default"])({
      'pp-active': isActive
    }, "pp-ico-".concat(icon), icon && typeof icon === 'string'))
  }), children));
};

TabItem.defaultProps = {
  isActive: false
};
var _default = TabItem;
exports["default"] = _default;