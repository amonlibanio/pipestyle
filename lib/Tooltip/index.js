"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Tooltip = function Tooltip(props) {
  var children = props.children,
      className = props.className;
  var customClass = (0, _classnames["default"])('pp-react-tooltip', className);
  return React.createElement("span", {
    className: customClass
  }, children);
};

var _default = Tooltip;
exports["default"] = _default;