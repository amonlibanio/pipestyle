"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Title = _interopRequireDefault(require("./Title"));

var _Button = _interopRequireDefault(require("./Button"));

var _Description = _interopRequireDefault(require("./Description"));

var _Icon = _interopRequireDefault(require("./Icon"));

var _Image = _interopRequireDefault(require("./Image"));

var _Video = _interopRequireDefault(require("./Video"));

var EmptyState = function EmptyState(_ref) {
  var dashedBorder = _ref.dashedBorder,
      children = _ref.children,
      className = _ref.className,
      type = _ref.type;
  return _react["default"].createElement("div", {
    "data-testid": "empty-state-container",
    className: (0, _classnames["default"])('pp-empty-state-container', "pp-empty-state-container-".concat(type), className, {
      'pp-empty-state-container-dashed': dashedBorder
    })
  }, children);
};

EmptyState.defaultProps = {
  dashedBorder: true,
  type: 'embedded'
};
EmptyState.Title = _Title["default"];
EmptyState.Button = _Button["default"];
EmptyState.Description = _Description["default"];
EmptyState.Icon = _Icon["default"];
EmptyState.Image = _Image["default"];
EmptyState.Video = _Video["default"];
var _default = EmptyState;
exports["default"] = _default;