"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Dots = _interopRequireDefault(require("./Dots"));

var _ButtonGroup = _interopRequireDefault(require("./ButtonGroup"));

var positions = {
  left: 'pp-flex-justify-start',
  center: 'pp-always-center',
  right: 'pp-flex-justify-end',
  "default": 'pp-flex-space-between'
};

var CarouselFooter = function CarouselFooter(_ref) {
  var children = _ref.children,
      nextLabel = _ref.nextLabel,
      prevLabel = _ref.prevLabel,
      doneLabel = _ref.doneLabel,
      onFinish = _ref.onFinish,
      dots = _ref.dots,
      slide = _ref.slide,
      pagination = _ref.pagination,
      footerPosition = _ref.footerPosition,
      middleDots = _ref.middleDots,
      arrowControls = _ref.arrowControls;
  var count = React.Children.count(children);
  var disableNextSlideButton = (0, _classnames["default"])({
    'pp-opacity-3': children && children.length === slide + 1 && !doneLabel
  });
  var nextLabelButton = doneLabel && slide + 1 === count ? doneLabel : nextLabel;
  var nextLabelAction = doneLabel && slide + 1 === count ? onFinish : function () {
    return pagination(slide + 1);
  };
  var buttonsClass = (0, _classnames["default"])('pp-carousel-buttons', {
    'pp-width-100': !dots,
    'pp-display-flex': middleDots
  });
  var footerClass = positions[footerPosition];
  return middleDots ? React.createElement("footer", {
    className: footerClass
  }, React.createElement("div", {
    className: buttonsClass
  }, React.createElement(_ButtonGroup["default"], {
    arrowControls: arrowControls,
    disableNextSlideButton: disableNextSlideButton,
    dots: dots,
    middleDots: middleDots,
    nextLabelAction: nextLabelAction,
    nextLabelButton: nextLabelButton,
    pagination: pagination,
    prevLabel: prevLabel,
    slide: slide
  }, React.createElement(_Dots["default"], {
    pagination: pagination,
    slide: slide
  }, children)))) : React.createElement("footer", {
    className: footerClass
  }, dots && React.createElement(_Dots["default"], {
    pagination: pagination,
    slide: slide
  }, children), React.createElement(_ButtonGroup["default"], {
    arrowControls: arrowControls,
    disableNextSlideButton: disableNextSlideButton,
    dots: dots,
    middleDots: middleDots,
    nextLabelAction: nextLabelAction,
    nextLabelButton: nextLabelButton,
    pagination: pagination,
    prevLabel: prevLabel,
    slide: slide
  }));
};

CarouselFooter.defaultProps = {
  footerPosition: 'default',
  middleDots: false
};
var _default = CarouselFooter;
exports["default"] = _default;