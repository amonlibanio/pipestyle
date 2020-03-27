"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Spinner = function Spinner(props) {
  var customClass = (0, _classnames["default"])('pp-ico-loading', props.className);
  return React.createElement("span", {
    className: customClass
  });
};

var _default = Spinner;
exports["default"] = _default;