"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = exports.TimePickerDropdown = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _reactOnclickoutside = _interopRequireDefault(require("react-onclickoutside"));

var _Dropdown = _interopRequireDefault(require("../Dropdown"));

var _Anchor = _interopRequireDefault(require("../Anchor"));

var _moment = _interopRequireDefault(require("../utils/moment"));

require("../utils/moment-locales");

var _formatTime = _interopRequireDefault(require("./utils/formatTime"));

var onClick = function onClick(onSelect, time) {
  return function (e) {
    onSelect(time);
    e.preventDefault();
  };
};

var TimePickerDropdown = function TimePickerDropdown(_ref) {
  var value = _ref.value,
      _ref$locale = _ref.locale,
      locale = _ref$locale === void 0 ? 'en-US' : _ref$locale,
      timezone = _ref.timezone,
      onSelect = _ref.onSelect,
      times = _ref.times;

  _momentTimezone["default"].locale((0, _moment["default"])(locale));

  _momentTimezone["default"].tz.setDefault(timezone);

  return React.createElement(_Dropdown["default"], {
    selectable: true,
    size: "sm",
    className: "pp-overflow-auto"
  }, React.createElement("div", null, times.map(function (time) {
    var title = (0, _formatTime["default"])((0, _momentTimezone["default"])(time), timezone, locale);
    var isActive = value && value.diff(time, 'minutes') === 0;
    return React.createElement("div", {
      key: time.valueOf(),
      className: (0, _classnames["default"])('pp-item-list', {
        'pp-active': isActive
      })
    }, React.createElement(_Anchor["default"], {
      id: "time_".concat(time.valueOf()),
      onClick: onClick(onSelect, time),
      tabIndex: 0,
      title: title,
      "aria-label": title
    }, React.createElement("span", null, title)));
  })));
};

exports.TimePickerDropdown = TimePickerDropdown;
TimePickerDropdown.defaultProps = {
  value: undefined,
  locale: 'en-US'
};

var _default = (0, _reactOnclickoutside["default"])(TimePickerDropdown);

exports["default"] = _default;