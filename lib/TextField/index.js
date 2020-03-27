"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _objectWithoutProperties2 = _interopRequireDefault(require("@babel/runtime/helpers/objectWithoutProperties"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var TextField = function TextField(props) {
  var allProps = _objectSpread({}, props, {}, props.customProps);

  var className = allProps.className,
      icon = allProps.icon,
      iconSide = allProps.iconSide,
      customProps = allProps.customProps,
      input = (0, _objectWithoutProperties2["default"])(allProps, ["className", "icon", "iconSide", "customProps"]);
  /** Input without icon */

  var renderInputOnly = function renderInputOnly() {
    return React.createElement("input", (0, _extends2["default"])({}, input, {
      className: (0, _classnames["default"])('pp-input', className)
    }));
  };
  /** Input with icon */


  var renderInputWithIcon = function renderInputWithIcon() {
    return React.createElement("div", {
      className: "pp-input-has-icon"
    }, renderInputOnly(), iconSide && React.createElement("span", {
      className: "pp-ico-".concat(icon)
    }));
  };

  return icon ? renderInputWithIcon() : renderInputOnly();
};

TextField.defaultProps = {
  iconSide: 'right',
  tabIndex: 0,
  type: 'text',
  customProps: {}
};
var _default = TextField;
exports["default"] = _default;