"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var React = _interopRequireWildcard(require("react"));

var _ = require("..");

var EmptyColorBoxes = function EmptyColorBoxes(props) {
  var emptyBoxes = props.emptyBoxes;
  var children = [];
  (0, _toConsumableArray2["default"])(Array(emptyBoxes)).map(function (child, index) {
    return children.push(React.createElement(_.Icon, {
      key: index,
      className: "pp-color-picker-choose pp-color-picker-empty"
    }));
  });
  return children;
};

EmptyColorBoxes.defaultProps = {
  emptyBoxes: 0
};
var _default = EmptyColorBoxes;
exports["default"] = _default;