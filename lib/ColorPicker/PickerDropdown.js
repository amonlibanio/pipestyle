"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _reactColor = require("react-color");

var _ = require("..");

var PickerDropdown =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(PickerDropdown, _React$Component);

  function PickerDropdown() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, PickerDropdown);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(PickerDropdown)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      color: _this.props.selected
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangeComplete", function (colorSelected) {
      _this.setState({
        color: colorSelected
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSave", function (e, color) {
      var _this$props = _this.props,
          onChange = _this$props.onChange,
          onChangeCustomColor = _this$props.onChangeCustomColor,
          closeTrigger = _this$props.closeTrigger;
      e.preventDefault();
      onChangeCustomColor(color);
      closeTrigger();
      onChange(color.toUpperCase());
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onCancel", function (e) {
      var closeTrigger = _this.props.closeTrigger;
      e.preventDefault();
      closeTrigger();
    });
    return _this;
  }

  (0, _createClass2["default"])(PickerDropdown, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          saveLabel = _this$props2.saveLabel,
          cancelLabel = _this$props2.cancelLabel;
      var color = this.state.color;
      var _onChangeComplete = this.onChangeComplete,
          onSave = this.onSave,
          onCancel = this.onCancel;
      return React.createElement(_.Dropdown, {
        className: "pp-color-picker-select ignore-react-onclickoutside"
      }, React.createElement(_reactColor.SketchPicker, {
        color: color,
        disableAlpha: true,
        presetColors: [],
        onChangeComplete: function onChangeComplete(colorSelected) {
          return _onChangeComplete(colorSelected.hex.toUpperCase());
        }
      }), React.createElement("div", {
        className: "pp-color-picker-select-footer pp-display-flex pp-flex-justify-end"
      }, React.createElement(_.Button, {
        onMouseDown: function onMouseDown(e) {
          return onCancel(e);
        },
        theme: "dark",
        size: "sm"
      }, cancelLabel), React.createElement(_.Button, {
        onMouseDown: function onMouseDown(e) {
          return onSave(e, color);
        },
        size: "sm"
      }, saveLabel)));
    }
  }]);
  return PickerDropdown;
}(React.Component);

PickerDropdown.defaultProps = {
  cancelLabel: 'Cancel',
  closeTrigger: function closeTrigger() {},
  onChangeCustomColor: function onChangeCustomColor() {},
  saveLabel: 'Save'
};
var _default = PickerDropdown;
exports["default"] = _default;