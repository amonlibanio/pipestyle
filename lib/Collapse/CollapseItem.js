"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Anchor = _interopRequireDefault(require("../Anchor"));

var CollapseItem = function CollapseItem(props) {
  var label = props.label,
      title = props.title,
      isOpen = props.isOpen,
      isAlwaysOpened = props.isAlwaysOpened,
      toggleCollapseState = props.toggleCollapseState,
      children = props.children,
      className = props.className,
      labelClassName = props.labelClassName;
  var collapseItemClasses = (0, _classnames["default"])('pp-collapse', {
    'pp-collapse-opened': !isAlwaysOpened && isOpen,
    'pp-collapse-opened-always': isAlwaysOpened
  }, className);
  return React.createElement("div", {
    className: collapseItemClasses
  }, React.createElement(_Anchor["default"], {
    href: "#",
    className: "pp-collapse-header",
    onClick: toggleCollapseState,
    title: title || label
  }, React.createElement("h3", {
    className: (0, _classnames["default"])(labelClassName, 'pp-collapse-title')
  }, label)), React.createElement(props.contentTag, {
    className: "pp-collapse-body"
  }, children));
};

CollapseItem.defaultProps = {
  isOpen: false,
  isAlwaysOpened: false,
  contentTag: 'div'
};
var _default = CollapseItem;
exports["default"] = _default;