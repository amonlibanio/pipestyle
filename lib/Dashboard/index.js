"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Anchor = _interopRequireDefault(require("../Anchor"));

var Dashboard = function Dashboard(props) {
  var title = props.title,
      subtitle = props.subtitle,
      icon = props.icon,
      count = props.count,
      className = props.className,
      containerClassName = props.containerClassName,
      children = props.children,
      actionText = props.actionText,
      actionIcon = props.actionIcon,
      actionOnClick = props.actionOnClick,
      actionHref = props.actionHref;
  return React.createElement("div", {
    className: (0, _classnames["default"])('pp-dashboard-boxes', containerClassName)
  }, React.createElement("div", {
    className: (0, _classnames["default"])('pp-dashboard', className)
  }, title && React.createElement("header", {
    className: "pp-dashboard-header"
  }, React.createElement("div", null, React.createElement("h2", {
    className: (0, _classnames["default"])('pp-title', icon)
  }, title, !!count && React.createElement("span", null, count)), subtitle && React.createElement("p", {
    className: "pp-subtitle"
  }, subtitle)), actionText && React.createElement("div", {
    className: "pp-dashboard-actions"
  }, React.createElement(_Anchor["default"], {
    className: (0, _classnames["default"])('pp-dashboard-link', actionIcon),
    href: actionHref,
    onClick: actionOnClick,
    title: actionText,
    tabIndex: 0
  }, actionText))), children));
};

var _default = Dashboard;
exports["default"] = _default;