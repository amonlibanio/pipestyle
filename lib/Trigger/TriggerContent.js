"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var TriggerContent = function TriggerContent(_ref) {
  var children = _ref.children,
      ref = _ref.ref;
  return React.createElement("div", {
    ref: ref
  }, children);
};

var _default = (0, _reactOnclickoutside["default"])(TriggerContent);

exports["default"] = _default;