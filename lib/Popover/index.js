"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _WhiteTopArrow = _interopRequireDefault(require("./WhiteTopArrow"));

var _WhiteBottomArrow = _interopRequireDefault(require("./WhiteBottomArrow"));

var _WhiteUpArrow = _interopRequireDefault(require("./WhiteUpArrow"));

var _CharcoalArrow = _interopRequireDefault(require("./CharcoalArrow"));

var positions = {
  bottomLeft: 'pp-arrow-left-down',
  bottomRight: 'pp-arrow-right-down',
  topLeft: 'pp-arrow-left-top',
  topRight: 'pp-arrow-right-top ',
  upLeft: 'pp-arrow-left-up ',
  upRight: 'pp-arrow-right-up ',
  noArrow: 'pp-display-none'
};
var borders = {
  bottomLeft: 'pp-border-left-down',
  bottomRight: 'pp-border-right-down',
  topLeft: 'pp-border-left-up',
  topRight: 'pp-border-right-up ',
  upLeft: 'pp-border-left-up',
  upRight: 'pp-border-right-up '
};
var themes = {
  danger: 'pp-bg-danger',
  white: 'pp-bg-white',
  info: 'pp-bg-info',
  success: 'pp-bg-success',
  warning: 'pp-bg-warning',
  dark: 'pp-bg-dark_cachoal-scale-6'
};
var arrows = {
  danger: 'pp-arrow-danger',
  white: 'pp-arrow-white',
  info: 'pp-arrow-info',
  success: 'pp-arrow-success',
  warning: 'pp-arrow-warning',
  dark: 'pp-arrow-dark'
};

var renderWhiteArrow = function renderWhiteArrow(pos, theme) {
  switch (pos) {
    case 'pp-arrow-left-down':
    case 'pp-arrow-right-down':
      return React.createElement(_WhiteBottomArrow["default"], {
        arrowPositon: pos,
        arrowTheme: theme
      });

    case 'pp-arrow-left-top':
    case 'pp-arrow-right-top':
      return React.createElement(_WhiteTopArrow["default"], {
        arrowPositon: pos,
        arrowTheme: theme
      });

    default:
      return React.createElement(_WhiteUpArrow["default"], {
        arrowPositon: pos,
        arrowTheme: theme
      });
  }
};

var renderArrow = function renderArrow(positionProp, theme) {
  var pos = positions[positionProp];

  if (theme === 'pp-arrow-white') {
    return renderWhiteArrow(pos, theme);
  }

  return React.createElement(_CharcoalArrow["default"], {
    arrowPositon: pos,
    arrowTheme: theme
  });
};

var Popover = function Popover(props) {
  var arrowPosition = props.arrowPosition,
      title = props.title,
      children = props.children,
      theme = props.theme,
      className = props.className,
      style = props.style;
  var arrowTheme = arrows[theme];
  var popClassName = (0, _classnames["default"])('pp-popover', 'pp-active', themes[theme], borders[arrowPosition], className, {
    'pp-popover-box-shadow': theme === 'white'
  });
  var titleClassName = (0, _classnames["default"])({
    'pp-color-white': theme !== 'white'
  });
  var contentColorClassName = (0, _classnames["default"])({
    'pp-color-white': theme !== 'white' && !title
  }, 'pp-popover-content');
  return React.createElement("div", {
    className: popClassName,
    style: style
  }, title && React.createElement("div", {
    className: "pp-popover-header"
  }, React.createElement("h3", {
    className: titleClassName
  }, title)), children && React.createElement("div", {
    className: contentColorClassName
  }, children), renderArrow(arrowPosition, arrowTheme));
};

Popover.defaultProps = {
  arrowPosition: 'noArrow',
  theme: 'dark'
};
var _default = Popover;
exports["default"] = _default;