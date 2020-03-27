"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _Button = _interopRequireDefault(require("../../Button"));

var _EmptyState = _interopRequireDefault(require("../../EmptyState"));

var _DropPlaceholder = _interopRequireDefault(require("./DropPlaceholder"));

var _DropAreaButton = _interopRequireDefault(require("./DropAreaButton"));

var FullAttachmentField = function FullAttachmentField(_ref) {
  var showDropPlaceholder = _ref.showDropPlaceholder,
      dropPlaceholder = _ref.dropPlaceholder,
      _ref$isEmpty = _ref.isEmpty,
      isEmpty = _ref$isEmpty === void 0 ? false : _ref$isEmpty,
      emptyStatePlaceholder = _ref.emptyStatePlaceholder,
      buttonPlaceholder = _ref.buttonPlaceholder,
      onClickButton = _ref.onClickButton,
      _ref$showButton = _ref.showButton,
      showButton = _ref$showButton === void 0 ? false : _ref$showButton,
      _ref$showListButton = _ref.showListButton,
      showListButton = _ref$showListButton === void 0 ? true : _ref$showListButton;
  return React.createElement(React.Fragment, null, showButton && showDropPlaceholder && React.createElement(_DropPlaceholder["default"], {
    placeholder: dropPlaceholder
  }), isEmpty && React.createElement(_EmptyState["default"], null, React.createElement(_EmptyState["default"].Icon, {
    icon: "attachment"
  }), React.createElement(_EmptyState["default"].Description, null, emptyStatePlaceholder)), showListButton && React.createElement(_DropAreaButton["default"], {
    onClick: onClickButton,
    showDropPlaceholder: showDropPlaceholder,
    buttonPlaceholder: buttonPlaceholder
  }), showButton && React.createElement(_Button["default"], {
    id: "open-explorer",
    className: "pp-pull-right",
    onClick: onClickButton
  }, buttonPlaceholder));
};

var _default = FullAttachmentField;
exports["default"] = _default;