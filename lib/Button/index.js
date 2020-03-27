"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var themes = {
  danger: 'pp-btn-danger',
  dark: 'pp-btn-dark',
  gray: 'pp-btn-gray',
  outline: 'pp-btn-outline',
  primary: 'pp-btn-primary',
  'light-gray': 'pp-btn-light-gray',
  lightBlue: 'pp-btn-light-blue'
};
var sizes = {
  sm: 'pp-btn-sm',
  md: 'pp-btn',
  lg: 'pp-btn-lg',
  round: 'pp-btn-round'
};

var Button = function Button(props) {
  var allProps = _objectSpread({}, props, {}, props.customProps);

  var children = allProps.children,
      className = allProps.className,
      customProps = allProps.customProps,
      fab = allProps.fab,
      icon = allProps.icon,
      size = allProps.size,
      theme = allProps.theme,
      button = (0, _objectWithoutProperties2["default"])(allProps, ["children", "className", "customProps", "fab", "icon", "size", "theme"]);
  var iconClass = icon ? "pp-ico-".concat(icon) : null;

  var makeButton = function makeButton(data) {
    return React.createElement(data.tag, (0, _extends2["default"])({}, button, {
      className: data.css
    }), children);
  };

  if (!fab) {
    return makeButton({
      tag: 'button',
      css: (0, _classnames["default"])(className, themes[theme], sizes[size] || sizes.md, iconClass, {
        'pp-disabled': button.disabled
      })
    });
  }

  return makeButton({
    tag: 'a',
    css: 'pp-fab-btn pp-ico-fab'
  });
};

Button.defaultProps = {
  autoFocus: false,
  customProps: {},
  disabled: false,
  fab: false,
  size: 'md',
  tabIndex: 0,
  type: 'button'
};
var _default = Button;
exports["default"] = _default;