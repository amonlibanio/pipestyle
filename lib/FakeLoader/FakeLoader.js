"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _FakeItem = _interopRequireDefault(require("./FakeItem"));

var FakeLoader = function FakeLoader(props) {
  var className = props.className,
      children = props.children;
  var customClass = (0, _classnames["default"])('pp-fake-loader', className);
  return React.createElement("span", {
    className: customClass
  }, React.createElement("span", {
    className: "pp-fake-content"
  }, children));
};

FakeLoader.Item = _FakeItem["default"];
var _default = FakeLoader;
exports["default"] = _default;