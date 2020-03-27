"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var OptionGroup = function OptionGroup(props) {
  return React.createElement("optgroup", {
    label: props.label,
    disabled: props.disabled
  }, props.children);
};

var _default = OptionGroup;
exports["default"] = _default;