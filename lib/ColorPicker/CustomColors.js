"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _ = require("..");

var _ColorBox = _interopRequireDefault(require("./ColorBox"));

var _EmptyColorBoxes = _interopRequireDefault(require("./EmptyColorBoxes"));

var _PickerDropdown = _interopRequireDefault(require("./PickerDropdown"));

var Constants = _interopRequireWildcard(require("./constants"));

var LIMIT_OF_CUSTOM_COLORS = 7;

var CustomColors =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(CustomColors, _React$Component);

  function CustomColors() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, CustomColors);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(CustomColors)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      colors: []
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "validateProps", function () {
      var customColors = _this.props.customColors;

      var limitedNumberofColors = _this.limitCustomColorsProp(customColors);

      var uniqueColors = _this.uniqueColors(limitedNumberofColors);

      _this.removeExistingColorsOnPalette(uniqueColors);

      _this.setState({
        colors: (0, _toConsumableArray2["default"])(uniqueColors)
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "limitCustomColorsProp", function (customColors) {
      return customColors.slice(0, LIMIT_OF_CUSTOM_COLORS);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "uniqueColors", function (customColors) {
      return customColors.filter(function (color, index) {
        return !!(customColors.indexOf(color) === index);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "removeExistingColorsOnPalette", function (uniqueColors) {
      Constants.colorPalette.forEach(function (color) {
        return uniqueColors.map(function (customColor, index) {
          if (color === customColor) {
            return uniqueColors.splice(index, 1);
          }

          return [];
        });
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChangeCustomColor", function (color) {
      var colors = _this.state.colors;
      var onChangeCustomColors = _this.props.onChangeCustomColors;
      var isPresentColors = false;
      var isPresentColorPalette = false;
      isPresentColorPalette = !!Constants.colorPalette.find(function (colorValue) {
        return !!(colorValue === color);
      });
      if (isPresentColorPalette) return;
      isPresentColors = !!colors.find(function (colorValue) {
        return !!(colorValue === color);
      });
      if (isPresentColors) return;

      if (colors.length === LIMIT_OF_CUSTOM_COLORS) {
        var customColorsValues = [color].concat((0, _toConsumableArray2["default"])(colors));
        customColorsValues.pop();

        _this.setState({
          colors: customColorsValues
        });

        onChangeCustomColors(customColorsValues);
      } else {
        _this.setState(function (prevState) {
          onChangeCustomColors([color].concat((0, _toConsumableArray2["default"])(prevState.colors)));
          return {
            colors: [color].concat((0, _toConsumableArray2["default"])(prevState.colors))
          };
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "renderColorBoxes", function () {
      var colors = _this.state.colors;
      var _this$props = _this.props,
          selected = _this$props.selected,
          onChange = _this$props.onChange,
          closeTrigger = _this$props.closeTrigger;
      return colors.map(function (color, index) {
        return React.createElement(_ColorBox["default"], {
          closeTrigger: closeTrigger,
          color: color,
          key: index,
          onChange: onChange,
          selected: selected === color
        });
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(CustomColors, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      this.validateProps();
    }
  }, {
    key: "render",
    value: function render() {
      var colors = this.state.colors;
      var _this$props2 = this.props,
          cancelLabel = _this$props2.cancelLabel,
          closeTrigger = _this$props2.closeTrigger,
          onChange = _this$props2.onChange,
          saveLabel = _this$props2.saveLabel,
          selected = _this$props2.selected;
      var onChangeCustomColor = this.onChangeCustomColor,
          renderColorBoxes = this.renderColorBoxes;
      var EmptyBoxes = LIMIT_OF_CUSTOM_COLORS - colors.length;
      var PickerDropdownComponent = React.createElement(_PickerDropdown["default"], {
        cancelLabel: cancelLabel,
        onChange: onChange,
        onChangeCustomColor: onChangeCustomColor,
        saveLabel: saveLabel,
        selected: selected
      });
      return React.createElement("div", {
        className: "pp-color-picker-custom"
      }, React.createElement(_.Trigger, {
        placement: "bottom",
        element: PickerDropdownComponent,
        trigger: "mouseDown",
        tetherProps: {
          offset: '-10px -120px',
          constraints: [{
            to: 'window'
          }]
        }
      }, React.createElement(_.Icon, {
        className: "pp-color-picker-choose pp-color-picker-add pp-cursor-pointer"
      }, "+")), renderColorBoxes(), React.createElement(_EmptyColorBoxes["default"], {
        emptyBoxes: EmptyBoxes
      }));
    }
  }]);
  return CustomColors;
}(React.Component);

CustomColors.defaultProps = {
  cancelLabel: 'Cancel',
  closeTrigger: function closeTrigger() {},
  customColors: [],
  onChange: function onChange() {},
  onChangeCustomColors: function onChangeCustomColors() {},
  saveLabel: 'Save',
  selected: ''
};
var _default = CustomColors;
exports["default"] = _default;