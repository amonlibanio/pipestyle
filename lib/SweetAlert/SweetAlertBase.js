"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactPortal = require("react-portal");

var _Button = _interopRequireDefault(require("../Button"));

var SweetAlertBase = function SweetAlertBase(props) {
  var children = props.children,
      emoji = props.emoji,
      warningText = props.warningText,
      warningTitle = props.warningTitle,
      onClose = props.onClose;
  return React.createElement(_reactPortal.Portal, {
    isOpened: true
  }, React.createElement("div", {
    className: "pp-sweetalert pp-active"
  }, React.createElement("div", {
    className: "pp-content"
  }, React.createElement("div", {
    className: "pp-overlay"
  }), React.createElement("div", {
    className: "pp-body pp-body-danger"
  }, emoji && React.createElement("span", {
    className: emoji
  }), warningTitle && React.createElement("h1", null, warningTitle), warningText && React.createElement("p", null, warningText), children, onClose && React.createElement(_Button["default"], {
    className: "pp-button-close",
    tabIndex: 0,
    onClick: onClose
  }, React.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7"))))));
};

var _default = SweetAlertBase;
exports["default"] = _default;