"use strict";

exports.__esModule = true;
exports["default"] = void 0;

var convertLocale = function convertLocale(locale) {
  var locales = {
    en: 'en-gb',
    'en-gb': 'en-gb',
    'en-GB': 'en-gb',
    'pt-br': 'pt-br',
    'pt-BR': 'pt-br',
    'en-us': 'en',
    'en-US': 'en',
    ru: 'ru',
    es: 'es',
    fr: 'fr'
  };
  return locales[locale] || locales['en-US'];
};

var _default = convertLocale;
exports["default"] = _default;