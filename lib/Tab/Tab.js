"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _TabItem = _interopRequireDefault(require("./TabItem"));

var Tab = function Tab(props) {
  var align = props.align,
      className = props.className,
      children = props.children,
      hasBorder = props.hasBorder;
  var tabClass = (0, _classnames["default"])('pp-tab', className, {
    'pp-text-left': align === 'left',
    'pp-text-right': align === 'right',
    'pp-tab-border': hasBorder
  });
  return React.createElement("ul", {
    className: tabClass
  }, children);
};

Tab.defaultProps = {
  hasBorder: false,
  align: 'center'
};
Tab.Item = _TabItem["default"];
var _default = Tab;
exports["default"] = _default;