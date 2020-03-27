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

var _ModalHeader = _interopRequireDefault(require("./ModalHeader"));

var _ModalContent = _interopRequireDefault(require("./ModalContent"));

var _ModalFooter = _interopRequireDefault(require("./ModalFooter"));

var _constants = require("./constants");

var Modal =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Modal, _React$Component);

  function Modal() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Modal);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Modal)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "passPropsToChildrens", function () {
      var _this$props = _this.props,
          children = _this$props.children,
          onClose = _this$props.onClose;
      return React.Children.map(children, function (child) {
        var props = {};

        if (child.type === _ModalHeader["default"] || child.type.displayName === 'ModalHeader') {
          props = {
            onClose: onClose
          };
        }

        return React.cloneElement(child, props);
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Modal, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          onClose = _this$props2.onClose,
          size = _this$props2.size,
          className = _this$props2.className,
          theme = _this$props2.theme;
      var customClass = (0, _classnames["default"])('pp-modals', _constants.MODAL_THEMES_CLASSNAME[theme] || _constants.MODAL_THEMES_CLASSNAME[_constants.MODAL_THEMES.LIGHT], _constants.MODAL_SIZES_CLASSNAME[size], className);
      var childrens = this.passPropsToChildrens();
      return React.createElement("div", {
        className: customClass
      }, React.createElement("div", {
        className: "pp-overlay",
        onClick: onClose
      }), React.createElement(this.props.contentTag, {
        className: "pp-modals-body"
      }, childrens));
    }
  }]);
  return Modal;
}(React.Component);

(0, _defineProperty2["default"])(Modal, "defaultProps", {
  contentTag: 'div',
  theme: _constants.MODAL_THEMES.LIGHT
});
Modal.Footer = _ModalFooter["default"];
Modal.Header = _ModalHeader["default"];
Modal.Content = _ModalContent["default"];
var _default = Modal;
exports["default"] = _default;