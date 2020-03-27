"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = exports.getTimes = void 0;

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _classnames = _interopRequireDefault(require("classnames"));

var _BaseField = _interopRequireDefault(require("../BaseField"));

var _MaskedInput = _interopRequireDefault(require("../MaskedInput"));

var _TimePickerDropdown = _interopRequireDefault(require("./TimePickerDropdown"));

var _keyCodes = _interopRequireDefault(require("../utils/keyCodes"));

var _regex = _interopRequireDefault(require("../utils/regex"));

var _formatTime = _interopRequireDefault(require("./utils/formatTime"));

var _moment = _interopRequireDefault(require("../utils/moment"));

require("../utils/moment-locales");

var getTimes = function getTimes(_ref) {
  var start = _ref.start,
      end = _ref.end,
      interval = _ref.interval,
      locale = _ref.locale,
      timezone = _ref.timezone;

  _momentTimezone["default"].locale((0, _moment["default"])(locale));

  _momentTimezone["default"].tz.setDefault(timezone);

  var times = [];
  var time = start;

  do {
    times.push(time);
    time = (0, _momentTimezone["default"])(time).add(interval, 'minutes');
  } while (time < end);

  return times;
};

exports.getTimes = getTimes;

var TimePicker =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(TimePicker, _React$Component);

  function TimePicker(props) {
    var _this;

    (0, _classCallCheck2["default"])(this, TimePicker);
    _this = (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TimePicker).call(this, props));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getTimeAndDate", function () {
      var _this$props = _this.props,
          value = _this$props.value,
          timezone = _this$props.timezone,
          locale = _this$props.locale;
      var time = value ? (0, _formatTime["default"])(value, timezone, locale, _this.getMask()) : '';
      var date = value ? value : undefined;
      return {
        time: time,
        date: date
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "updateDateTime", function () {
      var _this$props2 = _this.props,
          onChange = _this$props2.onChange,
          timezone = _this$props2.timezone;
      var _this$state = _this.state,
          date = _this$state.date,
          time = _this$state.time;
      var newDate;
      var timeMoment = (0, _momentTimezone["default"])(time, 'LT', true, timezone);
      var dateMoment = (0, _momentTimezone["default"])(date, 'LT', true, timezone);

      if (date && dateMoment.isValid()) {
        newDate = dateMoment.set({
          hour: timeMoment.get('hour'),
          minute: timeMoment.get('minute')
        });
      } else {
        newDate = timeMoment;
      }

      _this.setState({
        date: newDate
      });

      if (onChange) onChange(newDate);
      return newDate;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "clearDateTime", function () {
      var _this$props3 = _this.props,
          onChange = _this$props3.onChange,
          shouldClearDateTime = _this$props3.shouldClearDateTime;

      if (shouldClearDateTime) {
        _this.setState({
          time: '',
          date: undefined
        });

        if (onChange) onChange(null);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleChange", function (_ref2) {
      var time = _ref2.currentTarget.value;
      var locale = _this.props.locale;

      if (!_regex["default"].AT_LEAST_ONE_DIGIT.test(time)) {
        if (!_regex["default"].AT_LEAST_ONE_DIGIT.test(_this.state.time)) {
          return;
        }

        _this.clearDateTime();
      }

      _this.setState({
        time: time
      }, function () {
        var momentTime = (0, _momentTimezone["default"])(_this.state.time, 'LT', (0, _moment["default"])(locale), true);

        if (momentTime.isValid()) {
          _this.updateDateTime(_this.state.time);
        }
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleBlur", function () {
      var _this$props4 = _this.props,
          onChange = _this$props4.onChange,
          locale = _this$props4.locale;
      var time = _this.state.time;
      var momentTime = (0, _momentTimezone["default"])(time, 'LT', (0, _moment["default"])(locale), true);

      if (_regex["default"].AT_LEAST_ONE_DIGIT.test(time) && !momentTime.isValid()) {
        _this.setState({
          time: ''
        });

        if (onChange) onChange(null);
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onSelect", function (newDate) {
      var _this$props5 = _this.props,
          timezone = _this$props5.timezone,
          locale = _this$props5.locale,
          onChange = _this$props5.onChange;

      _this.setState({
        time: (0, _formatTime["default"])(newDate, timezone, locale, _this.getMask()),
        date: newDate,
        showDropdown: false
      });

      if (onChange) onChange(newDate);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onChange", function () {
      return _this.updateDateTime(_this.state.time);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onFocus", function () {
      return _this.setState({
        showDropdown: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onBlur", function () {
      return _this.setState({
        showDropdown: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleTimeKeys", function (e) {
      var newDate;
      var remainder;
      var above;
      var _this$props6 = _this.props,
          value = _this$props6.value,
          interval = _this$props6.interval,
          timezone = _this$props6.timezone,
          locale = _this$props6.locale;
      var valueMoment = (0, _momentTimezone["default"])(value, 'LT', true, timezone);
      var date = value ? valueMoment : _this.state.date;
      if (!date) return;

      switch (e.keyCode) {
        case _keyCodes["default"].UP_ARROW:
          remainder = date.minute() % interval || interval;
          newDate = date.subtract(remainder, 'minutes');
          break;

        case _keyCodes["default"].DOWN_ARROW:
          above = interval - date.minute() % interval;
          newDate = date.add(above, 'minutes');
          break;

        case _keyCodes["default"].ESCAPE:
        case _keyCodes["default"].ENTER:
          _this.setState({
            showDropdown: false
          });

          break;

        default:
          break;
      }

      if (newDate) {
        _this.setState({
          time: (0, _formatTime["default"])(newDate, timezone, locale),
          date: newDate
        }, _this.onChange);

        e.preventDefault();
        e.stopPropagation();
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onClickOutside", function () {
      return _this.setState({
        showDropdown: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getMask", function () {
      var _this$props7 = _this.props,
          mask = _this$props7.timeMask.mask,
          locale = _this$props7.locale;
      if (mask) return mask;
      var enUsFormatMask = '12:34 AM';
      var otherFormatMask = '12:34';
      return ['en-US'].includes(locale) ? enUsFormatMask : otherFormatMask;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getFormatChars", function () {
      var locale = _this.props.locale;
      var time = _this.state.time;
      var enUsFormatChars = {
        // en-US
        1: '[0-1]',
        2: time.startsWith('1') ? '[0-2]' : '[1-9]',
        3: '[0-5]',
        4: '[0-9]',
        A: '[a|p|A|P]'
      };
      var otherFormatChars = {
        1: '[0-2]',
        2: time.startsWith('2') ? '[0-3]' : '[0-9]',
        3: '[0-5]',
        4: '[0-9]'
      };
      return ['en-US'].includes(locale) ? enUsFormatChars : otherFormatChars;
    });
    var _locale = props.locale,
        _timezone = props.timezone;

    _momentTimezone["default"].locale((0, _moment["default"])(_locale));

    _momentTimezone["default"].tz.setDefault(_timezone);

    var _this$getTimeAndDate = _this.getTimeAndDate(),
        _time = _this$getTimeAndDate.time,
        _date = _this$getTimeAndDate.date;

    _this.state = {
      time: _time,
      date: _date,
      showDropdown: false
    };
    return _this;
  }

  (0, _createClass2["default"])(TimePicker, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (this.props.value !== prevProps.value) {
        var _this$getTimeAndDate2 = this.getTimeAndDate(),
            time = _this$getTimeAndDate2.time,
            date = _this$getTimeAndDate2.date;

        this.setState({
          time: time,
          date: date
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props8 = this.props,
          label = _this$props8.label,
          value = _this$props8.value,
          timezone = _this$props8.timezone,
          locale = _this$props8.locale,
          inputSize = _this$props8.inputSize,
          className = _this$props8.className,
          _this$props8$timeMask = _this$props8.timeMask,
          mask = _this$props8$timeMask.mask,
          formatChars = (0, _objectWithoutProperties2["default"])(_this$props8$timeMask, ["mask"]);
      var _this$state2 = this.state,
          showDropdown = _this$state2.showDropdown,
          time = _this$state2.time;
      var classes = (0, _classnames["default"])(className, {
        'col-md-6 pp-no-padding': !className
      });
      return React.createElement("div", {
        className: classes
      }, React.createElement(_BaseField["default"], {
        label: label,
        size: inputSize
      }, React.createElement(_MaskedInput["default"], {
        onFocus: this.onFocus,
        onChange: this.handleChange,
        onKeyDown: this.handleTimeKeys,
        onBlur: this.handleBlur,
        value: time,
        mask: this.getMask(),
        formatChars: this.getFormatChars(),
        className: "pp-text-uppercase",
        maskChar: "_"
      })), showDropdown && React.createElement("div", {
        className: "pp-position-absolute",
        style: {
          zIndex: 20
        }
      }, React.createElement(_TimePickerDropdown["default"], {
        value: value,
        onSelect: this.onSelect,
        locale: locale,
        times: getTimes(this.props),
        timezone: timezone,
        handleClickOutside: this.onClickOutside
      })));
    }
  }]);
  return TimePicker;
}(React.Component);

exports["default"] = TimePicker;
(0, _defineProperty2["default"])(TimePicker, "defaultProps", {
  value: undefined,
  onChange: function onChange() {},
  interval: 30,
  locale: 'en-US',
  inputSize: 'sm',
  timeMask: {
    mask: null,
    9: '[0-9]',
    A: '[a|p|A|P]'
  },
  shouldClearDateTime: true
});