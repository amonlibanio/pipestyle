"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var CardWrapper = function CardWrapper(props) {
  var children = props.children,
      className = props.className;
  var customClass = (0, _classnames["default"])('pp-card-wrap', className);
  return React.createElement("div", (0, _extends2["default"])({}, props, {
    className: customClass
  }), children);
};

var _default = CardWrapper;
exports["default"] = _default;