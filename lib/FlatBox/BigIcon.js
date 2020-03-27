"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Icon = _interopRequireDefault(require("../Icon"));

var BigIcon = function BigIcon(_ref) {
  var icon = _ref.icon;
  return React.createElement("span", {
    className: "pp-flat-box-icon pp-bg-ico"
  }, React.createElement(_Icon["default"], {
    className: icon
  }));
};

var _default = BigIcon;
exports["default"] = _default;