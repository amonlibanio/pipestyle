"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var FakeItem = function FakeItem(props) {
  return React.createElement("span", {
    className: props.type
  });
};

FakeItem.defaultProps = {
  type: ''
};
var _default = FakeItem;
exports["default"] = _default;