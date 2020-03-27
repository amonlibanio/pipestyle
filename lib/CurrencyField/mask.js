"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _toConsumableArray2 = _interopRequireDefault(require("@babel/runtime/helpers/toConsumableArray"));

var _typeof2 = _interopRequireDefault(require("@babel/runtime/helpers/typeof"));

var _locales = require("./locales");

var p = function p() {
  for (var _len = arguments.length, fns = new Array(_len), _key = 0; _key < _len; _key++) {
    fns[_key] = arguments[_key];
  }

  return fns.reduce(function (f, g) {
    return function () {
      return g(f.apply(void 0, arguments));
    };
  });
};
/** Regex to find a `-` on a string */


var rgFindNegativeSymbol = /^[\s]*-{1}|[?=*-]$/g;
var rgOnlyNumbers = /[\D]+/g;
var rgThousands = /(?=(?:...)*$)/;
/** Returns the correct locale config */

var getLocaleConfig = function getLocaleConfig(locale) {
  var config = _locales.locales[_locales.defaultLocale];

  if (typeof locale === 'string' && _locales.locales.hasOwnProperty(locale)) {
    config = _locales.locales[locale];
  } else if ((0, _typeof2["default"])(locale) === 'object') {
    config = locale;
  }

  return config;
};

var mask = function mask(locale) {
  var _getLocaleConfig = getLocaleConfig(locale),
      symbol = _getLocaleConfig.symbol,
      decimalScale = _getLocaleConfig.decimalScale,
      charThousands = _getLocaleConfig.charThousands,
      charDecimal = _getLocaleConfig.charDecimal;
  /** Returns if the value is a number  */


  var isNumber = function isNumber(value) {
    return typeof value === 'number' || Number(value) === value;
  };
  /** Returns if the value is negative  */


  var isNegative = function isNegative(value) {
    if (isNumber(value)) {
      return value < 0;
    }

    var match = value.replace(new RegExp("[".concat(symbol || '', "]+"), 'g'), '').match(rgFindNegativeSymbol) || [];
    return !!(match.length % 2);
  };
  /** Convert a number into a string, if the value already is a string, just return it */


  var convertNumberToString = function convertNumberToString(value) {
    return isNumber(value) ? value.toFixed(decimalScale) : value;
  };
  /** Convert a string into a number */


  var convertStringToNumber = function convertStringToNumber(value) {
    var number = Number(value);
    return number ? number / Math.pow(10, decimalScale) : Number(0.0);
  };
  /** Remove all non numeric characters */


  var getOnlyNumbers = function getOnlyNumbers(value) {
    return convertStringToNumber(value.replace(rgOnlyNumbers, '')).toFixed(decimalScale).replace(rgOnlyNumbers, '');
  };
  /** Add the decimal points */


  var addDecimalPoints = function addDecimalPoints(value) {
    return "".concat(value.substr(0, value.length - decimalScale) || '0', ".").concat(value.substr(decimalScale * -1));
  };
  /** Split number by decimal points */


  var splitValueByDecimal = function splitValueByDecimal(value) {
    return value.split('.');
  };
  /** Format the thousands */


  var formatThousands = function formatThousands(values) {
    return (0, _toConsumableArray2["default"])(values).map(function (value, index) {
      return index === 0 ? value.split(rgThousands).join(charThousands) : value;
    });
  };
  /** Format the currency */


  var formatCurrency = function formatCurrency(negativeSymbol) {
    return function (values) {
      return [symbol || '', negativeSymbol].concat((0, _toConsumableArray2["default"])(values.join(charDecimal))).join('');
    };
  };

  var convertToFloat = function convertToFloat(value, negative) {
    return Number(transformNumber(onlyNumbers(value))) * negative;
  };

  return {
    toFormatedValue: function toFormatedValue(value) {
      var negativeSymbol = isNegative(value) ? '-' : '';
      return p(convertNumberToString, getOnlyNumbers, addDecimalPoints, splitValueByDecimal, formatThousands, formatCurrency(negativeSymbol))(value);
    },
    toFloatValue: function toFloatValue(value) {
      var negative = isNegative(value) ? -1 : 1;
      return p(getOnlyNumbers, addDecimalPoints, Number)(value) * negative;
    }
  };
};

var _default = mask;
exports["default"] = _default;