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

var _Anchor = _interopRequireDefault(require("../Anchor"));

var _BaseField = _interopRequireDefault(require("../BaseField"));

var _Button = _interopRequireDefault(require("../Button"));

var _SweetAlertBase = _interopRequireDefault(require("./SweetAlertBase"));

var _TextField = _interopRequireDefault(require("../TextField"));

var SweetAlertConfirmation =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(SweetAlertConfirmation, _React$Component);

  function SweetAlertConfirmation() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, SweetAlertConfirmation);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(SweetAlertConfirmation)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      userKey: ''
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (event) {
      _this.setState({
        userKey: event.currentTarget.value.toLowerCase()
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKey", function () {
      return _this.props.confirmKey.toLowerCase();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isValid", function () {
      var userKey = _this.state.userKey;
      return userKey && userKey === _this.handleKey();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleSubmit", function (event) {
      event.preventDefault();
      if (_this.isValid()) _this.props.confirmButton.onClick(event);
    });
    return _this;
  }

  (0, _createClass2["default"])(SweetAlertConfirmation, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          cancelButton = _this$props.cancelButton,
          confirmButton = _this$props.confirmButton,
          confirmKey = _this$props.confirmKey,
          confirmMessage = _this$props.confirmMessage,
          emoji = _this$props.emoji,
          warningText = _this$props.warningText,
          warningTitle = _this$props.warningTitle;
      return React.createElement(_SweetAlertBase["default"], {
        warningTitle: warningTitle,
        warningText: warningText,
        emoji: emoji
      }, React.createElement("form", {
        className: "js-swal-confirm",
        onSubmit: this.handleSubmit
      }, React.createElement(_BaseField["default"], {
        label: confirmMessage
      }, React.createElement(_TextField["default"], {
        autoFocus: true,
        onChange: this.handleChange,
        placeholder: confirmKey,
        required: true,
        title: confirmKey,
        value: this.state.userKey
      })), React.createElement(_Button["default"], {
        disabled: !this.isValid(),
        tabIndex: 1,
        theme: confirmButton.theme || 'danger',
        title: confirmButton.label,
        type: "submit"
      }, confirmButton.label), React.createElement(_Button["default"], {
        onClick: cancelButton.onClick,
        tabIndex: 1,
        theme: cancelButton.theme || 'dark',
        title: cancelButton.label
      }, cancelButton.label)));
    }
  }]);
  return SweetAlertConfirmation;
}(React.Component);

(0, _defineProperty2["default"])(SweetAlertConfirmation, "defaultProps", {
  cancelButton: {},
  confirmButton: {},
  emoji: 'pp-emoji-warning',
  warningText: '',
  warningTitle: ''
});
var _default = SweetAlertConfirmation;
exports["default"] = _default;