"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var CardStats = function CardStats(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "pp-footer-stats"
  }, children);
};

var _default = CardStats;
exports["default"] = _default;