"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var Anchor = function Anchor(props) {
  return React.createElement("a", props, props.children);
};

Anchor.defaultProps = {
  href: '#',
  tabIndex: 0
};
var _default = Anchor;
exports["default"] = _default;