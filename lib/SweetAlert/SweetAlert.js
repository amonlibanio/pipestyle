"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Anchor = _interopRequireDefault(require("../Anchor"));

var _Button = _interopRequireDefault(require("../Button"));

var _SweetAlertBase = _interopRequireDefault(require("./SweetAlertBase"));

var SweetAlert = function SweetAlert(props) {
  var cancelButton = props.cancelButton,
      confirmButton = props.confirmButton,
      emoji = props.emoji,
      warningText = props.warningText,
      warningTitle = props.warningTitle,
      onClose = props.onClose;
  return React.createElement(_SweetAlertBase["default"], {
    emoji: emoji,
    warningText: warningText,
    warningTitle: warningTitle,
    onClose: onClose
  }, React.createElement(_Button["default"], {
    onClick: confirmButton.onClick,
    tabIndex: 1,
    theme: confirmButton.theme || 'danger',
    title: confirmButton.label
  }, confirmButton.label), React.createElement(_Button["default"], {
    onClick: cancelButton.onClick,
    tabIndex: 1,
    theme: cancelButton.theme || 'dark',
    title: cancelButton.label
  }, cancelButton.label));
};

SweetAlert.defaultProps = {
  cancelButton: {},
  confirmButton: {},
  emoji: 'pp-emoji',
  warningText: '',
  warningTitle: ''
};
var _default = SweetAlert;
exports["default"] = _default;