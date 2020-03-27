"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var CharcoalArrow = function CharcoalArrow(_ref) {
  var arrowPositon = _ref.arrowPositon,
      arrowTheme = _ref.arrowTheme;
  return React.createElement("svg", {
    width: "26",
    height: "18",
    xmlns: "http://www.w3.org/2000/svg",
    className: arrowPositon
  }, React.createElement("path", {
    d: "M3 0h20v12a2 2 0 0 1-3.258 1.554L3 0z",
    fill: "#122232",
    fillRule: "evenodd",
    className: arrowTheme
  }));
};

var _default = CharcoalArrow;
exports["default"] = _default;