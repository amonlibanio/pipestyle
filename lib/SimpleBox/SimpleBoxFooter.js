"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var SimpleBoxFooter = function SimpleBoxFooter(props) {
  var children = props.children,
      className = props.className;
  return React.createElement("footer", {
    className: className
  }, children);
};

var _default = SimpleBoxFooter;
exports["default"] = _default;