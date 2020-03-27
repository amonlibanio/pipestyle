"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var CardContent = function CardContent(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "pp-card-content"
  }, children);
};

var _default = CardContent;
exports["default"] = _default;