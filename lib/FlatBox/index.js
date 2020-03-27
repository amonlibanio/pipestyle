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

var _BigIcon = _interopRequireDefault(require("./BigIcon"));

var FlatBox =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(FlatBox, _React$PureComponent);

  function FlatBox() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, FlatBox);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(FlatBox)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      collapseOpened: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleCollapse", function () {
      _this.setState(function (prevState) {
        return {
          collapseOpened: !prevState.collapseOpened
        };
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(FlatBox, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          className = _this$props.className,
          containerClassName = _this$props.containerClassName,
          icon = _this$props.icon,
          title = _this$props.title,
          description = _this$props.description,
          children = _this$props.children;
      var collapseOpened = this.state.collapseOpened;
      var classNameContainer = (0, _classnames["default"])('pp-flat-box', containerClassName);
      var classNames = (0, _classnames["default"])('pp-flat-box-main', className);
      var classNameContent = (0, _classnames["default"])('pp-flat-box-content', {
        'pp-no-padding': !icon
      });
      var classNameCollapse = (0, _classnames["default"])('pp-flat-box-children', {
        'pp-active': collapseOpened
      });
      var collapseTrigger = (0, _classnames["default"])(collapseOpened ? 'pp-ico-bold-arrow-up' : 'pp-ico-bold-arrow-down');
      return React.createElement("div", {
        className: classNameContainer
      }, children && React.createElement("button", {
        type: "button",
        onClick: this.toggleCollapse,
        className: collapseTrigger
      }), React.createElement("div", {
        className: classNames
      }, icon && React.createElement(_BigIcon["default"], {
        icon: icon
      }), React.createElement("div", {
        className: classNameContent
      }, React.createElement("h2", {
        className: "pp-flat-box-title"
      }, title), typeof description === 'string' ? React.createElement("p", {
        className: "pp-flat-box-description"
      }, description) : description)), children && React.createElement("div", {
        className: classNameCollapse
      }, children));
    }
  }]);
  return FlatBox;
}(React.PureComponent);

var _default = FlatBox;
exports["default"] = _default;