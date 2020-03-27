"use strict";

exports.__esModule = true;
exports.lookup = exports.loadJSONP = void 0;

var loadJSONP = function loadJSONP(url, callback) {
  var ref = window.document.getElementsByTagName('script')[0];
  var script = window.document.createElement('script');
  script.src = "".concat(url + (url.indexOf('?') + 1 ? '&' : '?'), "callback=").concat(callback);
  ref.parentNode.insertBefore(script, ref);

  script.onload = function () {
    return script.remove();
  };
};

exports.loadJSONP = loadJSONP;

var lookup = function lookup(callback) {
  loadJSONP('https://app-location.pipefy.com/json', 'sendBack');

  window.sendBack = function (resp) {
    var countryCode = resp && resp.country_code ? resp.country_code : '';
    callback(countryCode);
  };
};

exports.lookup = lookup;