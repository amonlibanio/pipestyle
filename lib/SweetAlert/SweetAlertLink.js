"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _Anchor = _interopRequireDefault(require("../Anchor"));

var _Button = _interopRequireDefault(require("../Button"));

var _SweetAlertBase = _interopRequireDefault(require("./SweetAlertBase"));

var SweetAlertLink = function SweetAlertLink(props) {
  var cancelButton = props.cancelButton,
      confirmAnchor = props.confirmAnchor,
      emoji = props.emoji,
      warningText = props.warningText,
      warningTitle = props.warningTitle;
  return React.createElement(_SweetAlertBase["default"], {
    emoji: emoji,
    warningText: warningText,
    warningTitle: warningTitle
  }, React.createElement(_Button["default"], {
    onClick: cancelButton.onClick,
    tabIndex: 1,
    theme: cancelButton.theme || 'dark',
    title: cancelButton.label
  }, cancelButton.label), React.createElement(_Anchor["default"], (0, _extends2["default"])({
    className: confirmAnchor.className || 'pp-btn-primary',
    href: confirmAnchor.href,
    tabIndex: 1,
    title: confirmAnchor.label
  }, confirmAnchor), confirmAnchor.label));
};

SweetAlertLink.defaultProps = {
  cancelButton: {},
  confirmAnchor: {},
  emoji: 'pp-emoji-rocket',
  warningText: '',
  warningTitle: ''
};
var _default = SweetAlertLink;
exports["default"] = _default;