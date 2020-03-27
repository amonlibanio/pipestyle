"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var React = _interopRequireWildcard(require("react"));

var _reactIntlTelInput = _interopRequireDefault(require("react-intl-tel-input"));

var _regex = _interopRequireDefault(require("../utils/regex"));

var _utils = require("./utils");

require("react-intl-tel-input/dist/libphonenumber.js");

var replaceInvalidInput = function replaceInvalidInput(value) {
  if (value) return value.replace(_regex["default"].INVALID_TELEPHONE_CHARACTERS, '');
  return value;
};

var PhoneField = function PhoneField(_ref) {
  var className = _ref.className,
      value = _ref.value,
      input = (0, _objectWithoutProperties2["default"])(_ref, ["className", "value"]);
  return React.createElement(_reactIntlTelInput["default"], (0, _extends2["default"])({}, input, {
    value: replaceInvalidInput(value),
    css: ['intl-tel-input', 'pp-input', className]
  }));
};

PhoneField.defaultProps = {
  format: true,
  formatOnInit: false,
  separateDialCode: false,
  geoIpLookup: _utils.lookup,
  utilsScript: 'libphonenumber.js',
  defaultCountry: 'auto',
  preferredCountries: ['us', 'gb', 'br']
};
var _default = PhoneField;
exports["default"] = _default;