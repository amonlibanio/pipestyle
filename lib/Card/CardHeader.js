"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var CardHeader = function CardHeader(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "pp-card-header"
  }, children && React.createElement("div", {
    className: "pp-header-elements"
  }, children));
};

var _default = CardHeader;
exports["default"] = _default;