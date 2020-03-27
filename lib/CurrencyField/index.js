"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _mask = _interopRequireDefault(require("./mask"));

var _locales = require("./locales");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var CurrencyField =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(CurrencyField, _React$Component);

  function CurrencyField(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, CurrencyField);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(CurrencyField).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "mask", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "input", void 0);
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "formatValue", function (value) {
      return {
        floatValue: _this.mask.toFloatValue(value),
        formatedValue: _this.mask.toFormatedValue(value)
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleFocus", function (e) {
      if (_this.input) {
        _this.input.selectionStart = _this.input.selectionEnd = _this.input.value.length;
      }

      _this.props.onFocus && _this.props.onFocus(e);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (e) {
      _this.props.onChange && _this.props.onChange(e, _this.formatValue(e.currentTarget.value));
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getInputProps", function () {
      var _this$props = _this.props,
          value = _this$props.value,
          className = _this$props.className,
          locale = _this$props.locale,
          input = (0, _objectWithoutProperties2["default"])(_this$props, ["value", "className", "locale"]);
      var inputValue = value !== '' ? Number(value) : '';
      return _objectSpread({}, input, {
        value: _this.mask.toFormatedValue(inputValue),
        onChange: _this.handleChange,
        onFocus: _this.handleFocus,
        type: 'text',
        className: (0, _classnames["default"])(className, 'pp-input'),
        ref: function ref(el) {
          return _this.input = el;
        }
      });
    });
    _this.mask = (0, _mask["default"])(_this.props.locale);
    return _this;
  }

  (0, _createClass2["default"])(CurrencyField, [{
    key: "render",
    value: function render() {
      return React.createElement("input", this.getInputProps());
    }
  }]);
  return CurrencyField;
}(React.Component);

(0, _defineProperty2["default"])(CurrencyField, "defaultProps", {
  locale: _locales.defaultLocale,
  value: '',
  tabIndex: 0
});
var _default = CurrencyField;
exports["default"] = _default;