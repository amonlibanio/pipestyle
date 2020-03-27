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

var Select = function Select(props) {
  var allProps = _objectSpread({}, props, {}, props.customProps);

  var children = allProps.children,
      size = allProps.size,
      className = allProps.className,
      buttonLabel = allProps.buttonLabel,
      customProps = allProps.customProps,
      select = (0, _objectWithoutProperties2["default"])(allProps, ["children", "size", "className", "buttonLabel", "customProps"]);
  var sizes = {
    xs: 'pp-custom-select-xs',
    sm: 'pp-custom-select-sm',
    md: 'pp-custom-select'
  };
  var isTypeButton = typeof buttonLabel === 'string' && buttonLabel.length > 0;
  var wrapperClass = (0, _classnames["default"])(className, sizes[size] || sizes.md, {
    'pp-custom-select-btn': isTypeButton
  });

  var renderOnlySelect = function renderOnlySelect() {
    return React.createElement("select", (0, _extends2["default"])({}, select, {
      className: "pp-select"
    }), children);
  };

  var renderSelectWithLabel = function renderSelectWithLabel() {
    return React.createElement("label", null, buttonLabel, renderOnlySelect());
  };

  return React.createElement("div", {
    className: wrapperClass
  }, isTypeButton ? renderSelectWithLabel() : renderOnlySelect());
};

Select.defaultProps = {
  size: 'md',
  disabled: false,
  multiple: false,
  required: false,
  autoFocus: false,
  customProps: {},
  tabIndex: 0
};
var _default = Select;
exports["default"] = _default;