"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Anchor = _interopRequireDefault(require("../../Anchor"));

var SimpleAttachmentField = function SimpleAttachmentField(_ref) {
  var placeholder = _ref.placeholder;
  return React.createElement(_Anchor["default"], {
    className: "pp-action-add pp-ico-attachment"
  }, React.createElement("span", null, placeholder));
};

var _default = SimpleAttachmentField;
exports["default"] = _default;