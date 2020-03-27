"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("..");

var ColorBox = function ColorBox(props) {
  var className = props.className,
      closeTrigger = props.closeTrigger,
      color = props.color,
      onChange = props.onChange,
      selected = props.selected,
      tabIndex = props.tabIndex;
  var colorBoxClass = (0, _classnames["default"])('pp-color-picker-choose', className, {
    'pp-active': selected
  });

  var onClickColorBox = function onClickColorBox(e) {
    e.preventDefault();
    onChange(color);
    closeTrigger();
  };

  return React.createElement(_.Anchor, {
    className: colorBoxClass,
    onMouseDown: function onMouseDown(e) {
      return onClickColorBox(e);
    },
    style: {
      background: color,
      borderColor: color
    },
    tabIndex: tabIndex
  });
};

ColorBox.defaultProps = {
  className: '',
  closeTrigger: function closeTrigger() {},
  color: '',
  onChange: function onChange() {},
  selected: false,
  tabIndex: 0
};
var _default = ColorBox;
exports["default"] = _default;