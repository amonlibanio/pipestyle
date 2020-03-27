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

var _reactMarkdown = _interopRequireDefault(require("react-markdown"));

var _Anchor = _interopRequireDefault(require("../Anchor"));

var inputSizes = {
  sm: 'pp-input-sm',
  md: 'pp-input-md',
  lg: 'pp-input-lg'
};

var BaseField =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(BaseField, _React$Component);

  function BaseField() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, BaseField);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(BaseField)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      minimalView: _this.props.minimalView && _this.props.isEmpty
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleMinimalView", function (e) {
      e && e.preventDefault();

      _this.setState({
        minimalView: false
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(BaseField, [{
    key: "UNSAFE_componentWillUpdate",
    value: function UNSAFE_componentWillUpdate(nextProps) {
      if (this.props.minimalView !== nextProps.minimalView) {
        this.setState({
          minimalView: nextProps.minimalView
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var props = this.props;

      var markdownRenderer = function markdownRenderer(props) {
        if (props.href.match(/^((http|https|ftp|ftps):\/\/|mailto:)/i)) {
          return React.createElement(_Anchor["default"], {
            href: props.href,
            target: "_blank"
          }, props.children[0]);
        }

        return props.children[0];
      };

      var label = props.label,
          error = props.error,
          success = props.success,
          className = props.className,
          required = props.required,
          warning = props.warning,
          children = props.children,
          description = props.description,
          action = props.action,
          onDoubleClick = props.onDoubleClick,
          size = props.size;
      var minimalView = this.state.minimalView;

      if (minimalView) {
        return React.createElement(_Anchor["default"], {
          href: "#edit",
          className: "pp-action-add",
          onClick: this.handleMinimalView,
          title: "Edit",
          tabIndex: 0
        }, React.createElement("span", null, label));
      }

      var testStr = function testStr(value) {
        return typeof value === 'string' && value.length > 0;
      };

      var cn = (0, _classnames["default"])('pp-input-wrap', className, {
        'pp-error': testStr(error),
        'pp-success': testStr(success),
        'pp-warning': testStr(warning)
      }, inputSizes[size] || inputSizes.md, className);
      return React.createElement(props.tag, {
        className: cn,
        onDoubleClick: onDoubleClick
      }, label && React.createElement("b", {
        className: "pp-label-text"
      }, required && '*', label, action), description && React.createElement(_reactMarkdown["default"], {
        className: "markdown",
        source: description,
        renderers: {
          link: markdownRenderer
        }
      }), children, (error || success || warning) && React.createElement("span", {
        className: "pp-help-message"
      }, error || success || warning));
    }
  }]);
  return BaseField;
}(React.Component);

(0, _defineProperty2["default"])(BaseField, "defaultProps", {
  tag: 'label',
  minimalView: false,
  isEmpty: false
});
var _default = BaseField;
exports["default"] = _default;