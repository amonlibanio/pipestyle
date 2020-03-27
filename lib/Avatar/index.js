"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var colorsRandom = ['pp-bg-gray-scale-1 pp-color-dark', 'pp-bg-pipefy-scale-1', 'pp-bg-dark_cachoal-scale-1', 'pp-bg-orange-scale-1', 'pp-bg-ruby_red-scale-1', 'pp-bg-light_green-scale-1', 'pp-bg-purple-scale-1'];
var size = {
  sm: 'pp-avatar-sm',
  md: 'pp-avatar',
  lg: 'pp-avatar-lg'
};

var Avatar = function Avatar(props) {
  function setInitials() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var nameSplit = name.toUpperCase().split(' ');
    var initials;

    if (nameSplit.length == 1) {
      initials = nameSplit[0] ? nameSplit[0].charAt(0) : '?';
    } else {
      initials = nameSplit[0].charAt(0) + nameSplit[1].charAt(0);
    }

    return initials;
  }

  var customClass = (0, _classnames["default"])(size[props.size] || size.md, props.className);
  var randomize = colorsRandom[Math.floor(Math.random() * colorsRandom.length)];
  var avatar = React.createElement("img", {
    src: props.src,
    alt: setInitials(props.alt),
    title: props.title,
    className: customClass
  });
  var markupClassName = (0, _classnames["default"])('pp-avatar-markup', randomize, customClass);
  var markup = React.createElement("span", {
    title: props.title,
    className: markupClassName
  }, setInitials(props.alt));
  return React.createElement("span", null, props.src ? avatar : markup);
};

Avatar.defaultProps = {
  size: 'md'
};
var _default = Avatar;
exports["default"] = _default;