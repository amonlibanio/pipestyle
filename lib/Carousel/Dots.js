"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var Dots = function Dots(_ref) {
  var children = _ref.children,
      slide = _ref.slide,
      pagination = _ref.pagination;

  var dotsClassName = function dotsClassName(index) {
    return (0, _classnames["default"])({
      'pp-active': slide === index
    });
  };

  var handleClick = function handleClick(event, index) {
    event.preventDefault();
    pagination(index);
  };

  return _react["default"].createElement("div", {
    className: "pp-carousel-pagination"
  }, _react["default"].Children.map(children, function (item, index) {
    return _react["default"].createElement("button", {
      type: "button",
      tabIndex: "0",
      className: dotsClassName(index),
      onClick: function onClick(e) {
        return handleClick(e, index);
      },
      key: index
    }, index);
  }));
};

var _default = Dots;
exports["default"] = _default;