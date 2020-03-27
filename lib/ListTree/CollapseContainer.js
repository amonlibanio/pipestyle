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

var _CollapseComponent = _interopRequireDefault(require("./CollapseComponent"));

var CollapseContainer =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(CollapseContainer, _React$Component);

  function CollapseContainer() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, CollapseContainer);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(CollapseContainer)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isOpen: _this.props.defaultOpened
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleCollapse", function (e, id) {
      e.preventDefault();

      _this.setState(function (prevState) {
        return {
          isOpen: !prevState.isOpen
        };
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(CollapseContainer, [{
    key: "render",
    value: function render() {
      var props = this.props,
          state = this.state;
      return React.createElement(_CollapseComponent["default"], (0, _extends2["default"])({}, props, state, {
        toggleCollapse: this.toggleCollapse
      }));
    }
  }]);
  return CollapseContainer;
}(React.Component);

CollapseContainer.defaultProps = {
  defaultOpened: false
};
var _default = CollapseContainer;
exports["default"] = _default;