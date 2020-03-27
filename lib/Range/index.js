"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Range = function Range(props) {
  var className = props.className,
      range = (0, _objectWithoutProperties2["default"])(props, ["className"]);
  var wrapperClass = (0, _classnames["default"])('pp-input-range', className);
  return React.createElement("div", {
    className: wrapperClass
  }, React.createElement("input", (0, _extends2["default"])({}, range, {
    type: "range"
  })));
};

Range.defaultProps = {
  max: 100,
  min: 1,
  step: 1,
  tabIndex: 0
};
var _default = Range;
exports["default"] = _default;