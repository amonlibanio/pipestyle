"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactInputMask = _interopRequireDefault(require("react-input-mask"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var MaskedInput =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(MaskedInput, _React$Component);

  function MaskedInput(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, MaskedInput);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(MaskedInput).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getInputMaskProps", function () {
      var _this$props = _this.props,
          type = _this$props.type,
          mask = _this$props.mask,
          className = _this$props.className,
          placeholder = _this$props.placeholder,
          formatChars = _this$props.formatChars,
          maskChar = _this$props.maskChar;
      var customClass = (0, _classnames["default"])('pp-input', className);
      return _objectSpread({}, _this.props, {
        className: customClass,
        formatChars: formatChars,
        mask: mask,
        maskChar: maskChar,
        onChange: _this.handleChange,
        placeholder: placeholder || mask,
        type: type
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (e) {
      var onChange = _this.props.onChange;

      if (onChange) {
        onChange(e);
      }

      _this.setState({
        value: e.currentTarget.value
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "input", void 0);
    _this.state = {
      value: ''
    };
    return _this;
  }

  (0, _createClass2["default"])(MaskedInput, [{
    key: "UNSAFE_componentWillMount",
    value: function UNSAFE_componentWillMount() {
      var value = this.props.value;
      this.setState({
        value: value
      });
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(nextProps) {
      var value = this.state.value;

      if (value !== nextProps.value) {
        this.setState({
          value: nextProps.value
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var value = this.state.value;
      return React.createElement(_reactInputMask["default"], (0, _extends2["default"])({}, this.getInputMaskProps(), {
        value: value
      }));
    }
  }]);
  return MaskedInput;
}(React.Component);

(0, _defineProperty2["default"])(MaskedInput, "defaultProps", {
  className: '',
  formatChars: {
    '9': '[0-9]'
  },
  mask: '',
  maskChar: null,
  placeholder: undefined,
  tabIndex: 0,
  type: 'text',
  value: ''
});
var _default = MaskedInput;
exports["default"] = _default;