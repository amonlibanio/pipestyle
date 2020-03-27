"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var DropPlaceholder = function DropPlaceholder(_ref) {
  var placeholder = _ref.placeholder;
  return React.createElement("div", {
    className: "pp-dropzone-dropplaceholder"
  }, React.createElement("div", {
    className: "pp-dropzone-dropplaceholder-content"
  }, React.createElement("span", {
    className: "pp-ico-download"
  }), React.createElement("span", null, placeholder)));
};

var _default = DropPlaceholder;
exports["default"] = _default;