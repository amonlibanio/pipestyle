"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var ContentModal = function ContentModal(props) {
  var className = props.className,
      children = props.children;
  var customClass = (0, _classnames["default"])('pp-modals-content', className);
  return React.createElement("div", {
    className: customClass
  }, children);
};

var _default = ContentModal;
exports["default"] = _default;