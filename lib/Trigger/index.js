"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _reactTether = _interopRequireDefault(require("react-tether"));

var _Tooltip = _interopRequireDefault(require("../Tooltip"));

var _Popover = _interopRequireDefault(require("../Popover"));

var _TriggerContent = _interopRequireDefault(require("./TriggerContent"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var positions = {
  bottom: 'top center',
  bottomLeft: 'top right',
  bottomRight: 'top left',
  left: 'middle right',
  right: 'middle left',
  top: 'bottom center',
  topLeft: 'bottom right',
  topRight: 'bottom left'
};
var offsetsTooltip = {
  bottom: '-10px 0',
  bottomLeft: '-10px 0',
  bottomRight: '-10px 0',
  left: '0 10px',
  right: '0 -10px',
  top: '10px 0',
  topLeft: '10px 0',
  topRight: '10px 0'
};
var offsetsPopover = {
  bottom: '-15px 0',
  bottomLeft: '-15px 0',
  bottomRight: '-15px 0',
  left: '0 15px',
  right: '0 -15px',
  top: '15px 0',
  topLeft: '15px 0',
  topRight: '15px 0'
};

var Trigger =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Trigger, _React$Component);

  function Trigger() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Trigger);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Trigger)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isActive: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "closeTrigger", function (e) {
      var onClose = _this.props.onClose;

      _this.setState({
        isActive: false
      });

      onClose && onClose(e);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "openTrigger", function (e) {
      var onOpen = _this.props.onOpen;
      e && e.preventDefault();
      onOpen && onOpen(e);

      _this.setState({
        isActive: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "isOneOf", function (event, trigger) {
      if (typeof trigger === 'string') {
        return event === trigger;
      }

      return trigger.filter(function (a) {
        return a === event;
      }).length > 0;
    });
    return _this;
  }

  (0, _createClass2["default"])(Trigger, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          element = _this$props.element,
          placement = _this$props.placement,
          trigger = _this$props.trigger,
          tetherProps = _this$props.tetherProps,
          zIndex = _this$props.zIndex,
          className = _this$props.className,
          closeOnClickOutside = _this$props.closeOnClickOutside;
      var isOneOf = this.isOneOf,
          openTrigger = this.openTrigger,
          closeTrigger = this.closeTrigger;
      var isActive = this.state.isActive;
      var attachmentPosition = positions[placement];
      var triggerProps = {};
      var triggerClick = false;

      var customTetherProps = _objectSpread({}, tetherProps);

      var customClass = (0, _classnames["default"])(className || 'pp-display-inline-block');
      var typeTooltip = element.type && (element.type === _Tooltip["default"] || element.type.displayName === 'Tooltip');
      var typePopover = element.type && (element.type === _Popover["default"] || element.type.displayName === 'Popover');

      if (isOneOf('mouseDown', trigger)) {
        triggerClick = true;
        triggerProps = _objectSpread({}, triggerProps, {
          onMouseDown: function onMouseDown(e) {
            return openTrigger(e);
          }
        });
      }

      if (isOneOf('click', trigger)) {
        triggerClick = true;
        triggerProps = _objectSpread({}, triggerProps, {
          onClick: function onClick(e) {
            return openTrigger(e);
          }
        });
      }

      if (isOneOf('hover', trigger)) {
        triggerProps = _objectSpread({}, triggerProps, {
          onMouseOver: openTrigger,
          onMouseOut: closeTrigger
        });
      }

      if (isOneOf('focus', trigger)) {
        triggerProps = _objectSpread({}, triggerProps, {
          onFocus: openTrigger,
          onBlur: closeTrigger
        });
      }

      if (!customTetherProps.offset) {
        if (typeTooltip) {
          customTetherProps = {
            offset: offsetsTooltip[placement]
          };
        }

        if (typePopover) {
          customTetherProps = {
            offset: offsetsPopover[placement]
          };
        }
      }

      return React.createElement(_reactTether["default"], (0, _extends2["default"])({
        attachment: attachmentPosition,
        constraints: customTetherProps.constraints,
        style: {
          zIndex: zIndex
        }
      }, customTetherProps, {
        renderTarget: function renderTarget(ref) {
          return React.createElement("span", (0, _extends2["default"])({
            ref: ref,
            className: customClass
          }, triggerProps), children);
        },
        renderElement: function renderElement(ref) {
          return isActive && (triggerClick ? React.createElement(_TriggerContent["default"], {
            ref: ref,
            handleClickOutside: closeOnClickOutside && closeTrigger
          }, element && React.cloneElement(element, {
            openTrigger: openTrigger,
            closeTrigger: closeTrigger
          })) : React.createElement("div", {
            ref: ref
          }, element));
        }
      }));
    }
  }]);
  return Trigger;
}(React.Component);

(0, _defineProperty2["default"])(Trigger, "defaultProps", {
  closeOnClickOutside: true,
  placement: 'top',
  zIndex: 100,
  onClose: function onClose() {},
  onOpen: function onOpen() {},
  tetherProps: {
    constraints: [{
      to: 'scrollParent',
      attachment: 'together'
    }]
  }
});
var _default = Trigger;
exports["default"] = _default;