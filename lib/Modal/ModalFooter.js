"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var ModalFooter = function ModalFooter(props) {
  var children = props.children,
      className = props.className;
  var customClass = (0, _classnames["default"])('pp-modals-footer', className);
  return React.createElement("footer", {
    className: customClass
  }, children);
};

ModalFooter.defaultProps = {
  className: 'pp-flex-center pp-flex-justify-end'
};
var _default = ModalFooter;
exports["default"] = _default;