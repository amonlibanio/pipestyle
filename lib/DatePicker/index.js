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

var _reactDatepicker = _interopRequireDefault(require("react-datepicker"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _Button = _interopRequireDefault(require("../Button"));

var _BaseField = _interopRequireDefault(require("../BaseField"));

var _Dropdown = _interopRequireDefault(require("../Dropdown"));

var _MaskedInput = _interopRequireDefault(require("../MaskedInput"));

var _TimePicker = _interopRequireDefault(require("../TimePicker"));

var _keyCodes = _interopRequireDefault(require("../utils/keyCodes"));

var _isEmpty = _interopRequireDefault(require("../utils/isEmpty"));

var _moment = _interopRequireDefault(require("../utils/moment"));

require("../utils/moment-locales");

// require("react-datepicker/dist/react-datepicker.css");

var formatDate = function formatDate(_ref) {
  var date = _ref.date,
      timezone = _ref.timezone,
      locale = _ref.locale;
  return (0, _momentTimezone["default"])(date).locale((0, _moment["default"])(locale)).tz(timezone).format('L');
};

var DatePicker =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(DatePicker, _React$Component);

  function DatePicker(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, DatePicker);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(DatePicker).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (date) {
      if (!date) return;
      var _this$props = _this.props,
          timezone = _this$props.timezone,
          locale = _this$props.locale;

      _this.setState({
        date: date,
        dateText: formatDate({
          date: date,
          timezone: timezone,
          locale: locale
        })
      }, function () {
        return _this.props.onChange(date);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBlur", function () {
      var dateText = _this.state.dateText;
      var locale = _this.props.locale;

      if (!(0, _momentTimezone["default"])(dateText, ['L', 'l'], (0, _moment["default"])(locale), true).isValid()) {
        _this.setState({
          dateText: ''
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleTextChange", function (e) {
      var locale = _this.props.locale;
      var dateText = e.currentTarget.value;
      var date = (0, _momentTimezone["default"])(dateText, ['L', 'l'], (0, _moment["default"])(locale), true);

      if (_this.state.date) {
        var utcDate = _this.state.date.utc();

        date.utc().set({
          hour: utcDate.get('hour'),
          minute: utcDate.get('minute')
        });
      }

      _this.setState({
        dateText: dateText,
        date: date.isValid() ? date : _this.state.date
      }, function () {
        return date.isValid() && _this.props.onChange(date);
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateDate", function (date) {
      var _this$props2 = _this.props,
          timezone = _this$props2.timezone,
          locale = _this$props2.locale;
      return {
        date: date,
        dateText: formatDate({
          date: date,
          timezone: timezone,
          locale: locale
        })
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleKeys", function (e) {
      var date = _this.state.date || (0, _momentTimezone["default"])();

      var onChange = function onChange() {
        return _this.props.onChange && _this.props.onChange(_this.state.date);
      };

      var _this$props3 = _this.props,
          timezone = _this$props3.timezone,
          locale = _this$props3.locale;

      _momentTimezone["default"].locale((0, _moment["default"])(locale));

      var newDate;

      switch (e.keyCode) {
        case _keyCodes["default"].UP_ARROW:
          newDate = (0, _momentTimezone["default"])(date).subtract(7, 'days');
          break;

        case _keyCodes["default"].DOWN_ARROW:
          newDate = (0, _momentTimezone["default"])(date).add(7, 'days');
          break;

        case _keyCodes["default"].LEFT_ARROW:
          newDate = (0, _momentTimezone["default"])(date).subtract(1, 'days');
          break;

        case _keyCodes["default"].RIGHT_ARROW:
          newDate = (0, _momentTimezone["default"])(date).add(1, 'days');
          break;

        case _keyCodes["default"].PAGE_UP:
          newDate = (0, _momentTimezone["default"])(date).subtract(1, 'months');
          break;

        case _keyCodes["default"].PAGE_DOWN:
          newDate = (0, _momentTimezone["default"])(date).add(1, 'months');
          break;

        case _keyCodes["default"].HOME:
          newDate = (0, _momentTimezone["default"])(date).startOf('week');
          break;

        case _keyCodes["default"].END:
          newDate = (0, _momentTimezone["default"])(date).endOf('week');
          break;

        case _keyCodes["default"].ESCAPE:
          newDate = (0, _momentTimezone["default"])();
          break;

        default:
          break;
      }

      if (newDate) {
        _this.setState(_this.updateDate(newDate), onChange);

        e.preventDefault();
        e.stopPropagation();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "clearDate", function () {
      _this.setState({
        dateText: '',
        date: undefined
      }, function () {
        return _this.props.onChange && _this.props.onChange(undefined);
      });
    });
    var value = props.value,
        _locale = props.locale,
        _timezone = props.timezone;

    _momentTimezone["default"].locale((0, _moment["default"])(_locale));

    _momentTimezone["default"].tz.setDefault(_timezone);

    if (value) value.locale((0, _moment["default"])(_locale));
    _this.state = {
      dateText: value ? formatDate({
        date: value,
        timezone: _timezone,
        locale: _locale
      }) : '',
      date: value || undefined
    };
    return _this;
  }

  (0, _createClass2["default"])(DatePicker, [{
    key: "render",
    value: function render() {
      var _this$props4 = this.props,
          showTime = _this$props4.showTime,
          showClearButton = _this$props4.showClearButton,
          locale = _this$props4.locale,
          dateLabel = _this$props4.dateLabel,
          timezone = _this$props4.timezone,
          timeLabel = _this$props4.timeLabel,
          clearButtonLabel = _this$props4.clearButtonLabel,
          ariaLabel = _this$props4.ariaLabel,
          _this$props4$dateMask = _this$props4.dateMask,
          mask = _this$props4$dateMask.mask,
          formatChars = (0, _objectWithoutProperties2["default"])(_this$props4$dateMask, ["mask"]),
          timeMask = _this$props4.timeMask,
          today = _this$props4.today;

      _momentTimezone["default"].locale((0, _moment["default"])(locale));

      var _this$state = this.state,
          date = _this$state.date,
          dateText = _this$state.dateText;
      var fullAriaLabel = date && "".concat(ariaLabel).concat((0, _momentTimezone["default"])(date).tz(timezone).format('LL'));
      return React.createElement(_Dropdown["default"], {
        className: "pp-date-picker"
      }, React.createElement("div", {
        className: "col-md-12 pp-no-padding"
      }, React.createElement("div", {
        className: "col-md-6 pp-no-padding"
      }, React.createElement(_BaseField["default"], {
        label: dateLabel,
        size: "sm"
      }, React.createElement(_MaskedInput["default"], {
        value: dateText,
        onChange: this.handleTextChange,
        onBlur: this.handleBlur,
        mask: mask || '99/99/9999',
        formatChars: (0, _isEmpty["default"])(formatChars) ? {
          '9': '[0-9]'
        } : formatChars,
        maskChar: "_"
      }))), showTime && React.createElement(_TimePicker["default"], {
        label: timeLabel,
        value: date,
        onChange: this.handleChange,
        start: (0, _momentTimezone["default"])(date || today).startOf('day'),
        end: (0, _momentTimezone["default"])(date || today).endOf('day'),
        interval: 30,
        locale: locale,
        timezone: timezone,
        timeMask: timeMask,
        shouldClearDateTime: false
      })), React.createElement("input", {
        id: "calendar",
        style: {
          height: 0,
          wight: 0,
          border: 0
        },
        tabIndex: 0,
        onKeyDown: this.handleKeys,
        "aria-label": fullAriaLabel
      }), React.createElement(_reactDatepicker["default"], {
        inline: true,
        showMonthDropdown: true,
        showYearDropdown: true,
        selected: date && date.tz(timezone),
        dropdownMode: "select",
        onChange: this.handleChange,
        locale: locale,
        timezone: timezone,
        dateFormatCalendar: " ",
        clearButtonTitle: clearButtonLabel,
        utcOffset: date && date.utcOffset()
      }), showClearButton && React.createElement(_Button["default"], {
        title: clearButtonLabel,
        "aria-label": clearButtonLabel,
        onClick: this.clearDate
      }, clearButtonLabel));
    }
  }]);
  return DatePicker;
}(React.Component);

exports["default"] = DatePicker;
(0, _defineProperty2["default"])(DatePicker, "defaultProps", {
  locale: 'en-US',
  timeLabel: '',
  clearButtonLabel: '',
  ariaLabel: '',
  value: undefined,
  dateMask: {},
  timeMask: {},
  showTime: false,
  showClearButton: false,
  onChange: function onChange() {},
  today: undefined
});