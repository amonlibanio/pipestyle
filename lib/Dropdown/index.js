"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Header = _interopRequireDefault(require("./Header"));

var _Footer = _interopRequireDefault(require("./Footer"));

var Dropdown = function Dropdown(props) {
  var size = props.size,
      selectable = props.selectable,
      className = props.className,
      children = props.children,
      style = props.style;
  var headerProps = {
    placeholder: props.inputPlaceholder,
    className: props.inputClassName,
    onChange: props.inputOnChange,
    title: props.inputTitle,
    value: props.inputValue,
    tabIndex: props.inputTabIndex,
    label: props.inputLabel,
    labelClassName: props.labelClassName,
    autoFocus: props.inputAutoFocus,
    icon: props.inputIcon
  };
  var footerProps = {
    label: props.buttonLabel,
    title: props.buttonTitle,
    tabIndex: props.buttonTabIndex,
    className: props.buttonClassName,
    onClick: props.buttonOnClick
  };
  var dropSize = {
    sm: 'pp-drop-down-sm',
    md: 'pp-drop-down-md',
    lg: 'pp-drop-down-lg'
  };
  var customClass = (0, _classnames["default"])('pp-drop-down', dropSize[size], className, {
    'pp-drop-down-selectable': selectable
  });
  return React.createElement("div", {
    className: customClass,
    style: style
  }, React.createElement(props.tag, {
    className: "pp-drop-down-content"
  }, (props.inputLabel || props.inputValue || props.inputOnChange) && React.createElement(_Header["default"], headerProps), children), props.buttonLabel && React.createElement(_Footer["default"], footerProps));
};

Dropdown.defaultProps = {
  selectable: false,
  tag: 'div'
};
var _default = Dropdown;
exports["default"] = _default;