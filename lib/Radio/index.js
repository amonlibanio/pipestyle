"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Radio = function Radio(props) {
  var className = props.className,
      size = props.size,
      label = props.label,
      title = props.title,
      radio = (0, _objectWithoutProperties2["default"])(props, ["className", "size", "label", "title"]);
  var radioSizes = {
    sm: 'pp-radio-sm',
    md: 'pp-radio',
    lg: 'pp-radio-lg'
  };
  var wrapperClass = (0, _classnames["default"])(radioSizes[size] || radioSizes.md, className);
  return React.createElement("div", {
    className: wrapperClass
  }, React.createElement("input", (0, _extends2["default"])({}, radio, {
    type: "radio"
  })), React.createElement("label", {
    htmlFor: props.id,
    title: title
  }, label));
};

Radio.defaultProps = {
  tabIndex: 0,
  disabled: false,
  size: 'md',
  id: 'radio',
  title: ''
};
var _default = Radio;
exports["default"] = _default;