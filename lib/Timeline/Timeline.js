"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Item = _interopRequireDefault(require("./Item"));

var Timeline = function Timeline(_ref) {
  var line = _ref.line,
      className = _ref.className,
      children = _ref.children;
  return React.createElement("div", {
    className: (0, _classnames["default"])({
      'pp-activities': line
    }, className)
  }, children);
};

Timeline.defaultProps = {
  line: true
};
Timeline.Item = _Item["default"];
var _default = Timeline;
exports["default"] = _default;