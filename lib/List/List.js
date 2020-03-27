"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ListItem = _interopRequireDefault(require("./ListItem"));

var List = function List(_ref) {
  var ordered = _ref.ordered,
      className = _ref.className,
      children = _ref.children;
  var listClass = (0, _classnames["default"])('pp-list', className, {
    'pp-list-ordered': ordered
  });
  return React.createElement("ul", {
    className: listClass
  }, children);
};

List.defaultProps = {
  ordered: false
};
List.Item = _ListItem["default"];
var _default = List;
exports["default"] = _default;