"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("../Button"));

var Footer = function Footer(props) {
  var label = props.label,
      className = props.className,
      button = (0, _objectWithoutProperties2["default"])(props, ["label", "className"]);
  var buttonClass = (0, _classnames["default"])('pp-display-block', className);
  return React.createElement("footer", {
    className: "pp-drop-down-footer"
  }, React.createElement(_Button["default"], (0, _extends2["default"])({
    theme: "outline",
    size: "sm"
  }, button, {
    className: buttonClass
  }), label));
};

var _default = Footer;
exports["default"] = _default;