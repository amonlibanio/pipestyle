"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _ProgressTotal = _interopRequireDefault(require("./ProgressTotal"));

var ProgressInfo = function ProgressInfo(props) {
  var theme = props.theme,
      label = props.label,
      indeterminate = props.indeterminate,
      step = props.step,
      total = props.total;
  return React.createElement("span", {
    className: "pp-progressbar-title pp-color-".concat(theme)
  }, React.createElement("span", null, React.createElement("span", {
    className: "pp-color-gray5"
  }, label), ' ', !indeterminate && "".concat(step, "%")), !indeterminate && total && React.createElement(_ProgressTotal["default"], props));
};

var _default = ProgressInfo;
exports["default"] = _default;