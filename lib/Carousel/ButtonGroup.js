"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Button = _interopRequireDefault(require("../Button"));

var ButtonGroup = function ButtonGroup(_ref) {
  var children = _ref.children,
      prevLabel = _ref.prevLabel,
      dots = _ref.dots,
      slide = _ref.slide,
      pagination = _ref.pagination,
      middleDots = _ref.middleDots,
      nextLabelAction = _ref.nextLabelAction,
      disableNextSlideButton = _ref.disableNextSlideButton,
      nextLabelButton = _ref.nextLabelButton,
      arrowControls = _ref.arrowControls;
  var disablePrevSlideButton = (0, _classnames["default"])({
    'pp-opacity-3': slide === 0
  });
  var buttonsClass = (0, _classnames["default"])('pp-carousel-buttons', {
    'pp-width-100': !dots,
    'pp-display-flex': middleDots
  });

  var handleClick = function handleClick(e, index) {
    e.preventDefault();
    pagination(index);
  };

  var arrowControlClass = function arrowControlClass(position) {
    return (0, _classnames["default"])("pp-ico-bold-arrow-".concat(position), 'pp-arrow-control-btn', (0, _defineProperty2["default"])({}, "".concat(disablePrevSlideButton), position === 'left'), (0, _defineProperty2["default"])({}, "".concat(disableNextSlideButton), position === 'right'), {
      'pp-always-center': middleDots
    });
  };

  return React.createElement("div", {
    className: buttonsClass
  }, arrowControls ? React.createElement("button", {
    className: arrowControlClass('left'),
    onClick: function onClick(e) {
      return handleClick(e, slide - 1);
    },
    tabIndex: 0,
    title: prevLabel,
    type: "button"
  }) : React.createElement(_Button["default"], {
    onClick: function onClick(e) {
      return handleClick(e, slide - 1);
    },
    className: disablePrevSlideButton,
    size: "sm",
    title: prevLabel,
    theme: "dark"
  }, prevLabel), children, arrowControls ? React.createElement("button", {
    className: arrowControlClass('right'),
    onClick: nextLabelAction,
    tabIndex: 0,
    title: nextLabelButton,
    type: "button"
  }) : React.createElement(_Button["default"], {
    onClick: nextLabelAction,
    className: disableNextSlideButton,
    title: nextLabelButton,
    size: "sm"
  }, nextLabelButton));
};

var _default = ButtonGroup;
exports["default"] = _default;