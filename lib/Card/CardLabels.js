"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var CardLabels = function CardLabels(_ref) {
  var children = _ref.children;
  return React.createElement("span", {
    className: "pp-card-label"
  }, children);
};

var _default = CardLabels;
exports["default"] = _default;