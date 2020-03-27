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

var _CollapseItem = _interopRequireDefault(require("./CollapseItem"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var Collapse =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Collapse, _React$PureComponent);

  function Collapse() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Collapse);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Collapse)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {});
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "toggleCollapseState", function (e, index) {
      e.preventDefault();

      var prevState = _objectSpread({}, _this.state);

      var name = "collapse_".concat(index);

      if (_this.props.isAccordion) {
        Object.keys(prevState).forEach(function (key) {
          prevState[key] = false;
        });
        prevState[name] = true;
      } else {
        prevState[name] = !prevState[name];
      }

      _this.setState(prevState);
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "passPropsToChildrens", function () {
      return React.Children.map(_this.props.children, function (child, index) {
        var props = {};

        if (child.type === _CollapseItem["default"] || child.type.displayName === 'CollapseItem') {
          props = {
            toggleCollapseState: function toggleCollapseState(e) {
              _this.toggleCollapseState(e, index);
            },
            isOpen: _this.state["collapse_".concat(index)]
          };
        }

        return React.cloneElement(child, props);
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(Collapse, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var state = {};
      React.Children.forEach(this.props.children, function (child, index) {
        state["collapse_".concat(index)] = child.props.isOpen || false;
      });
      this.setState(_objectSpread({}, state));
    }
  }, {
    key: "render",
    value: function render() {
      var childrenWithProps = this.passPropsToChildrens();
      var isGroup = Object.keys(this.state).length > 1;
      var className = this.props.className;
      return React.createElement("div", {
        className: (0, _classnames["default"])(className, {
          'pp-collapse-group': isGroup
        })
      }, childrenWithProps);
    }
  }]);
  return Collapse;
}(React.PureComponent);

(0, _defineProperty2["default"])(Collapse, "defaultProps", {
  isAccordion: false
});
Collapse.Item = _CollapseItem["default"];
var _default = Collapse;
exports["default"] = _default;