"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ProgressInfo = _interopRequireDefault(require("./ProgressInfo"));

var POSITION = {
  left: 'pp-progressbar-title-left',
  right: 'pp-progressbar-title-right'
};
var SIZE = {
  small: 'pp-progressbar-small'
};

var ProgressBar = function ProgressBar(props) {
  var customClass = (0, _classnames["default"])('pp-progressbar', POSITION[props.position], SIZE[props.size]);
  var width = {
    width: "".concat(props.step, "%")
  };
  return React.createElement("div", {
    className: customClass
  }, !props.standalone && props.label && React.createElement(_ProgressInfo["default"], props), React.createElement("div", {
    className: (0, _classnames["default"])('pp-progress', {
      'pp-progress-bounce': props.indeterminate,
      'pp-animate': props.animate
    })
  }, React.createElement("span", {
    className: "pp-bg-".concat(props.theme),
    style: width
  })), !props.standalone && !props.label && !props.indeterminate && React.createElement("span", {
    className: "pp-progressbar-title pp-color-".concat(props.theme)
  }, props.step, "%"));
};

ProgressBar.defaultProps = {
  step: 10,
  theme: 'success',
  indeterminate: false,
  standalone: false,
  animate: false
};
var _default = ProgressBar;
exports["default"] = _default;