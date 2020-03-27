"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var themes = {
  danger: 'pp-badges-danger',
  "default": 'pp-badges',
  info: 'pp-badges-info',
  success: 'pp-badges-success',
  warning: 'pp-badges-warning'
};
var themesIcon = {
  danger: 'pp-badges-ico-danger',
  "default": 'pp-badges-ico',
  info: 'pp-badges-ico-info',
  success: 'pp-badges-ico-success',
  warning: 'pp-badges-ico-warning'
};

var Badge = function Badge(props) {
  var theme = props.theme,
      light = props.light,
      border = props.border,
      children = props.children,
      className = props.className,
      icon = props.icon,
      single = props.single,
      customProps = props.customProps;
  var themeBadge = themes[theme];
  var themeIcon = themesIcon[theme];
  var customClass = (0, _classnames["default"])({
    'pp-single-badge': single
  }, (0, _defineProperty2["default"])({}, "".concat(themeBadge), theme && !single), (0, _defineProperty2["default"])({}, "".concat(themeBadge, "-border"), border), (0, _defineProperty2["default"])({}, "".concat(themeBadge, "-light"), light), (0, _defineProperty2["default"])({}, "".concat(themeIcon), icon), className);
  return React.createElement("span", (0, _extends2["default"])({}, customProps, {
    className: customClass
  }), !icon && children);
};

Badge.defaultProps = {
  border: false,
  customProps: {},
  icon: false,
  light: false,
  single: false,
  theme: 'default'
};
var _default = Badge;
exports["default"] = _default;