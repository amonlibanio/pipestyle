"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var ProgressTotal = function ProgressTotal(props) {
  var icon = props.icon,
      theme = props.theme,
      step = props.step,
      total = props.total;
  return React.createElement("span", {
    className: "pp-pull-right"
  }, React.createElement("span", {
    className: (0, _classnames["default"])(icon, "pp-color-".concat(theme))
  }), step, React.createElement("span", null, "/", total));
};

var _default = ProgressTotal;
exports["default"] = _default;