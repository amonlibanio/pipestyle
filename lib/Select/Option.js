"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var Option = function Option(props) {
  return React.createElement("option", {
    disabled: props.disabled,
    selected: props.selected,
    value: props.value
  }, props.children);
};

var _default = Option;
exports["default"] = _default;