"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Icon = _interopRequireDefault(require("../Icon"));

var positions = {
  left: 'pp-start-form-wrapper-left',
  right: 'pp-start-form-wrapper-right'
};

var FloatingBox =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(FloatingBox, _React$Component);

  function FloatingBox() {
    var _getPrototypeOf2,
        _this2 = this;

    var _this;

    (0, _classCallCheck2["default"])(this, FloatingBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(FloatingBox)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isActive: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggle", function () {
      _this.setState(function (prevState) {
        return {
          isActive: !prevState.isActive
        };
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getActiveState", function () {
      var _assertThisInitialize = (0, _assertThisInitialized2["default"])(_this),
          props = _assertThisInitialize.props,
          state = _assertThisInitialize.state;

      return props.trigger ? state.isActive : props.isActive;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getTitle", function () {
      var title = _this.props.title;
      if (!title) return null;

      if (typeof title === 'string') {
        return React.createElement("h1", null, title);
      }

      return title;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getTrigger", function () {
      var trigger = _this.props.trigger;

      if (trigger) {
        return React.cloneElement(trigger, {
          onClick: _this.toggle
        });
      }

      return null;
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "getWrapper", function () {
      var _this$props = _this.props,
          children = _this$props.children,
          footer = _this$props.footer,
          header = _this$props.header,
          icon = _this$props.icon,
          menu = _this$props.menu,
          onClose = _this$props.onClose,
          transition = _this$props.transition;

      var isActive = _this.getActiveState();

      var titleEl = _this.getTitle();

      return React.createElement(_this2.props.tag, {
        className: (0, _classnames["default"])('pp-start-form', {
          'pp-active': isActive
        }),
        style: transition && {
          bottom: -2360
        } || {}
      }, React.createElement("span", {
        className: "pp-action-close pp-ico-close",
        title: "Cancel",
        onClick: onClose || _this.toggle
      }), React.createElement("div", {
        className: "pp-body"
      }, React.createElement("span", {
        className: "pp-border-body"
      }), React.createElement("header", {
        className: "pp-start-form-header"
      }, icon && React.createElement(_Icon["default"], {
        className: icon
      }), titleEl, header && React.createElement("div", {
        className: "pp-header-options"
      }, header)), menu && React.createElement("div", {
        className: "pp-start-form-fields"
      }, menu), children), footer && React.createElement("footer", null, footer));
    });
    return _this;
  }

  (0, _createClass2["default"])(FloatingBox, [{
    key: "componentDidUpdate",
    value: function componentDidUpdate() {
      var isActive = this.getActiveState();
      var onOpen = this.props.onOpen;

      if (onOpen && isActive) {
        onOpen();
      }
    }
  }, {
    key: "render",
    value: function render() {
      var position = this.props.position;
      var triggerEl = this.getTrigger();
      var wrapperEl = this.getWrapper();
      return React.createElement("div", {
        className: (0, _classnames["default"])(positions[position] || positions.right)
      }, triggerEl, wrapperEl);
    }
  }]);
  return FloatingBox;
}(React.Component);

(0, _defineProperty2["default"])(FloatingBox, "defaultProps", {
  tag: 'div',
  transition: false,
  position: 'right'
});
var _default = FloatingBox;
exports["default"] = _default;