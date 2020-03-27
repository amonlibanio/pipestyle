"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var CardBadges = function CardBadges(_ref) {
  var children = _ref.children;
  return React.createElement("div", {
    className: "pp-cards-badges"
  }, children);
};

var _default = CardBadges;
exports["default"] = _default;