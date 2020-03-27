"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var CarouselItem = function CarouselItem(props) {
  var content = props.content;
  return _react["default"].createElement("li", null, _react["default"].createElement("div", {
    className: "pp-carousel-item"
  }, _react["default"].createElement("div", {
    className: "pp-carousel-frame"
  }, content)));
};

var _default = CarouselItem;
exports["default"] = _default;