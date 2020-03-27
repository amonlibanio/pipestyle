"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Alert = function Alert(props) {
  var type = props.type,
      big = props.big,
      icon = props.icon,
      message = props.message,
      onClickClose = props.onClickClose,
      closeTitle = props.closeTitle;
  var alertTypes = {
    success: 'pp-notice',
    info: 'pp-notice-info',
    warning: 'pp-notice-warning',
    danger: 'pp-notice-danger'
  };
  var classes = (0, _classnames["default"])(alertTypes[type] || alertTypes.success, {
    'pp-notice-big': big
  });
  return React.createElement("div", {
    className: classes
  }, React.createElement("span", {
    className: "pp-ico-".concat(icon)
  }), React.createElement("p", null, message), onClickClose && React.createElement("a", {
    href: "#close",
    title: closeTitle,
    tabIndex: 0,
    className: "pp-ico-close",
    onClick: onClickClose
  }));
};

Alert.defaultProps = {
  type: 'success',
  big: false,
  icon: 'check'
};
var _default = Alert;
exports["default"] = _default;