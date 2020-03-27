"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Anchor = _interopRequireDefault(require("../Anchor"));

var _Button = _interopRequireDefault(require("../Button"));

var _SidebarItem = _interopRequireDefault(require("./SidebarItem"));

var Sidebar = function Sidebar(props) {
  var isActive = props.isActive,
      children = props.children,
      title = props.title,
      onClickBack = props.onClickBack,
      onClickClose = props.onClickClose,
      descriptionTitle = props.descriptionTitle,
      descriptionText = props.descriptionText,
      descriptionTooltipClose = props.descriptionTooltipClose,
      descriptionOnClickClose = props.descriptionOnClickClose,
      buttonLabel = props.buttonLabel,
      buttonOnClick = props.buttonOnClick,
      onScroll = props.onScroll,
      className = props.className;
  var classes = (0, _classnames["default"])('pp-sidebar', className, {
    'pp-active': isActive
  });
  return React.createElement("aside", {
    className: classes,
    "aria-hidden": !isActive,
    onScroll: onScroll
  }, React.createElement("header", {
    className: "pp-flex-space-between"
  }, React.createElement("h2", {
    className: "pp-sidebar-title"
  }, onClickBack && React.createElement(_Anchor["default"], {
    href: "#",
    className: "pp-ico-left",
    onClick: onClickBack
  }), title), React.createElement(_Anchor["default"], {
    href: "#",
    className: "pp-ico-close",
    onClick: onClickClose
  })), React.createElement("div", {
    className: "pp-sidebar-content"
  }, (descriptionTitle || descriptionText) && React.createElement("div", {
    className: "pp-sidebar-description"
  }, React.createElement("strong", null, descriptionTitle, descriptionOnClickClose && React.createElement(_Anchor["default"], {
    href: "#",
    "data-title": descriptionTooltipClose,
    className: "pp-tooltip pp-tooltip-left",
    onClick: descriptionOnClickClose
  }, React.createElement("span", {
    className: "pp-ico-close"
  }))), React.createElement("p", null, descriptionText)), children), buttonLabel && React.createElement("footer", null, React.createElement(_Button["default"], {
    onClick: buttonOnClick,
    title: buttonLabel,
    className: "pp-display-block"
  }, buttonLabel)));
};

Sidebar.defaultProps = {
  isActive: false,
  onScroll: function onScroll() {}
};
Sidebar.Item = _SidebarItem["default"];
var _default = Sidebar;
exports["default"] = _default;