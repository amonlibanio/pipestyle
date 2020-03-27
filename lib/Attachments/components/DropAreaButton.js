"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var DropAreaButton = function DropAreaButton(_ref) {
  var onClickButton = _ref.onClickButton,
      _ref$showDropPlacehol = _ref.showDropPlaceholder,
      showDropPlaceholder = _ref$showDropPlacehol === void 0 ? false : _ref$showDropPlacehol,
      buttonPlaceholder = _ref.buttonPlaceholder;
  var isDroppable = (0, _classnames["default"])('pp-attachment-drop-button', {
    'pp-active': showDropPlaceholder
  });
  return React.createElement("button", {
    "data-testid": "drop-area-button-test-id",
    id: "drop_area_button",
    title: "Drop your files here",
    className: isDroppable,
    type: "button",
    onClick: onClickButton
  }, React.createElement("span", {
    className: "pp-bg-ico"
  }), React.createElement("span", {
    className: "pp-link"
  }, buttonPlaceholder));
};

var _default = DropAreaButton;
exports["default"] = _default;