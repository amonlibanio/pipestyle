"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _momentTimezone = _interopRequireDefault(require("moment-timezone"));

var _moment = _interopRequireDefault(require("../../utils/moment"));

require("../../utils/moment-locales.js");

var formatTime = function formatTime(time, timezone) {
  var locale = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 'en-US';
  var mask = arguments.length > 3 ? arguments[3] : undefined;
  var text = time.locale((0, _moment["default"])(locale)).tz(timezone).format('LT');

  if (mask && text.length < mask.length) {
    text = ['en-US'].includes(locale) ? "0".concat(text) : text;
  }

  return text;
};

var _default = formatTime;
exports["default"] = _default;