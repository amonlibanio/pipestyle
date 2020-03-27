"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Switch = function Switch(props) {
  var title = props.title,
      className = props.className,
      input = (0, _objectWithoutProperties2["default"])(props, ["title", "className"]);
  var customClass = (0, _classnames["default"])('pp-toggle', className);
  return React.createElement("div", {
    className: "pp-switch-button"
  }, React.createElement("input", (0, _extends2["default"])({}, input, {
    type: "checkbox"
  })), React.createElement("label", {
    htmlFor: input.id,
    className: customClass,
    tabIndex: input.tabIndex,
    title: title
  }, React.createElement("span", {
    className: "pp-toggle-handler"
  })));
};

Switch.defaultProps = {
  id: 'mySwitch',
  tabIndex: 0,
  disabled: false,
  title: ''
};
var _default = Switch;
exports["default"] = _default;