"use strict";

exports.__esModule = true;
exports.locales = exports.defaultLocale = void 0;
var defaultLocale = 'en-US';
exports.defaultLocale = defaultLocale;
var locales = {
  'pt-BR': {
    charThousands: '.',
    charDecimal: ',',
    symbol: 'R$ ',
    decimalScale: 2
  },
  'en-US': {
    charThousands: ',',
    charDecimal: '.',
    symbol: '$ ',
    decimalScale: 2
  }
};
exports.locales = locales;