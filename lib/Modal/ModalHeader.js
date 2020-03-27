"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Anchor = _interopRequireDefault(require("../Anchor"));

var _Button = _interopRequireDefault(require("../Button"));

var ModalHeader = function ModalHeader(props) {
  var children = props.children,
      className = props.className,
      title = props.title,
      icon = props.icon,
      onClose = props.onClose,
      dataTestId = props.dataTestId;
  var customClass = (0, _classnames["default"])('pp-modals-header', className);
  return React.createElement("header", {
    className: customClass,
    "data-testid": dataTestId
  }, title && React.createElement("h1", {
    className: "pp-modals-title"
  }, title, icon && React.createElement(_Anchor["default"], {
    className: icon.className,
    href: icon.url,
    rel: "noopener noreferrer",
    tabIndex: 0,
    target: "_blank",
    title: icon.title
  })), children, onClose && React.createElement(_Button["default"], {
    className: "pp-modals-close",
    tabIndex: 0,
    onClick: onClose
  }, React.createElement("span", {
    "aria-hidden": "true"
  }, "\xD7")));
};

var _default = ModalHeader;
exports["default"] = _default;