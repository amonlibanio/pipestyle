"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Checkbox = function Checkbox(props) {
  var size = props.size,
      label = props.label,
      className = props.className,
      title = props.title,
      checkbox = (0, _objectWithoutProperties2["default"])(props, ["size", "label", "className", "title"]);
  var checkboxSizes = {
    sm: 'pp-checkbox-sm',
    md: 'pp-checkbox',
    lg: 'pp-checkbox-lg'
  };
  var wrapperClass = (0, _classnames["default"])(checkboxSizes[size] || checkboxSizes.md, className);
  return React.createElement("div", {
    className: wrapperClass
  }, React.createElement("input", (0, _extends2["default"])({}, checkbox, {
    type: "checkbox"
  })), React.createElement("label", {
    htmlFor: props.id,
    title: title
  }, label));
};

Checkbox.defaultProps = {
  tabIndex: 0,
  disabled: false,
  size: 'md',
  id: 'checkbox',
  title: ''
};
var _default = Checkbox;
exports["default"] = _default;