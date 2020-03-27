"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var Icon = function Icon(props) {
  var children = props.children;
  return React.createElement("span", {
    className: props.className
  }, children);
};

Icon.defaultProps = {
  className: 'pp-ico-pipefy'
};
var _default = Icon;
exports["default"] = _default;