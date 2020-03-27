"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Anchor = _interopRequireDefault(require("../Anchor"));

var SidebarItem = function SidebarItem(props) {
  var label = props.label,
      description = props.description,
      icon = props.icon,
      image = props.image,
      imageAlt = props.imageAlt,
      className = props.className,
      closeElement = props.closeElement,
      item = (0, _objectWithoutProperties2["default"])(props, ["label", "description", "icon", "image", "imageAlt", "className", "closeElement"]);
  var iconClass = icon && icon.length > 0 ? "pp-sidebar-ico-".concat(icon) : false;
  var imageClass = (0, _classnames["default"])('pp-sidebar-item-image', iconClass);
  var itemClass = (0, _classnames["default"])(className, 'pp-sidebar-item');
  return React.createElement("div", {
    className: itemClass
  }, closeElement, React.createElement(_Anchor["default"], item, React.createElement("div", {
    className: imageClass
  }, image && React.createElement("img", {
    src: image,
    alt: imageAlt
  })), React.createElement("span", null, React.createElement("strong", null, label), description)));
};

var _default = SidebarItem;
exports["default"] = _default;