"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("..");

var _ColorBox = _interopRequireDefault(require("./ColorBox"));

var _CustomColors = _interopRequireDefault(require("./CustomColors"));

var ColorValues = _interopRequireWildcard(require("./constants"));

var ColorPicker = function ColorPicker(props) {
  var cancelLabel = props.cancelLabel,
      className = props.className,
      closeTrigger = props.closeTrigger,
      customColors = props.customColors,
      customEnabled = props.customEnabled,
      customValues = props.customValues,
      onChange = props.onChange,
      onChangeCustomColors = props.onChangeCustomColors,
      saveLabel = props.saveLabel,
      selected = props.selected;
  var colorPickerClasses = (0, _classnames["default"])('pp-color-picker', {
    'pp-color-picker-custom-value': customValues !== ColorValues.colorPalette
  }, className);
  return React.createElement(_.Dropdown, {
    className: colorPickerClasses
  }, customValues && React.createElement("div", {
    className: "pp-color-picker-colors"
  }, customValues.map(function (color, index) {
    return React.createElement(_ColorBox["default"], {
      closeTrigger: closeTrigger,
      color: color,
      key: index,
      onChange: onChange,
      selected: !!(selected.toUpperCase() === color)
    });
  })), customEnabled && React.createElement(_CustomColors["default"], {
    cancelLabel: cancelLabel,
    closeTrigger: closeTrigger,
    customColors: customColors,
    onChange: onChange,
    onChangeCustomColors: onChangeCustomColors,
    saveLabel: saveLabel,
    selected: selected
  }));
};

ColorPicker.defaultProps = {
  cancelLabel: 'Cancel',
  closeTrigger: function closeTrigger() {},
  customColors: [],
  customEnabled: true,
  customValues: ColorValues.colorPalette,
  onChange: function onChange() {},
  onChangeCustomColors: function onChangeCustomColors() {},
  saveLabel: 'Save',
  selected: ColorValues.darkCachoal
};
var _default = ColorPicker;
exports["default"] = _default;