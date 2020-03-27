"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Anchor = _interopRequireDefault(require("../Anchor"));

var colorBase = 'pp-activities-color';
var colors = {
  blue: "".concat(colorBase, "-blue"),
  green: "".concat(colorBase, "-green"),
  red: "".concat(colorBase, "-red"),
  orange: "".concat(colorBase, "-orange"),
  purple: "".concat(colorBase, "-purple"),
  gray: "".concat(colorBase, "-gray"),
  dark: "".concat(colorBase, "-dark")
};

var Item = function Item(props) {
  var _cn;

  var title = props.title,
      date = props.date,
      dateTitle = props.dateTitle,
      icon = props.icon,
      color = props.color,
      children = props.children,
      className = props.className,
      anchor = (0, _objectWithoutProperties2["default"])(props, ["title", "date", "dateTitle", "icon", "color", "children", "className"]);
  var titleProps = {
    dangerouslySetInnerHTML: {
      __html: title
    }
  };
  var useAnchor = anchor.onClick || anchor.href;
  var itemClass = (0, _classnames["default"])('pp-activities-item', className, (_cn = {}, (0, _defineProperty2["default"])(_cn, colors[color] || colors.blue, !useAnchor), (0, _defineProperty2["default"])(_cn, 'pp-activities-action', useAnchor), _cn));
  return React.createElement("div", {
    className: itemClass
  }, icon && React.createElement("span", {
    className: (0, _classnames["default"])('pp-action-type', icon)
  }), useAnchor ? React.createElement("p", null, React.createElement(_Anchor["default"], (0, _extends2["default"])({}, anchor, titleProps))) : React.createElement("p", titleProps), date && React.createElement("span", {
    className: "pp-activities-date",
    title: dateTitle
  }, date), children);
};

Item.defaultProps = {
  color: 'blue'
};
var _default = Item;
exports["default"] = _default;