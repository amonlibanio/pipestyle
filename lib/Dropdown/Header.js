"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TextField = _interopRequireDefault(require("../TextField"));

var Header = function Header(props) {
  var label = props.label,
      labelClassName = props.labelClassName,
      className = props.className,
      input = (0, _objectWithoutProperties2["default"])(props, ["label", "labelClassName", "className"]);
  var labelCustomClass = (0, _classnames["default"])('pp-input-wrap', labelClassName);
  var inputCustomClass = (0, _classnames["default"])('pp-input', className);
  return React.createElement("header", {
    className: "pp-drop-down-header"
  }, React.createElement("label", {
    className: labelCustomClass
  }, label && React.createElement("b", {
    className: "pp-label-text"
  }, label), React.createElement(_TextField["default"], (0, _extends2["default"])({}, input, {
    className: inputCustomClass
  }))));
};

Header.defaultProps = {
  tabIndex: 0
};
var _default = Header;
exports["default"] = _default;