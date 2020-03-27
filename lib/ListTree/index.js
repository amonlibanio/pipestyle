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

var _ListTree = _interopRequireDefault(require("./ListTree"));

var ListTreeGroup =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(ListTreeGroup, _React$Component);

  function ListTreeGroup() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, ListTreeGroup);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(ListTreeGroup)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      collapsesOpened: _this.props.collapsesOpened
    });
    return _this;
  }

  (0, _createClass2["default"])(ListTreeGroup, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          list = _this$props.list,
          separator = _this$props.separator,
          globalOnClick = _this$props.globalOnClick,
          onFavorite = _this$props.onFavorite;
      var multipleList = list.length > 1;
      return React.createElement("div", {
        className: "pp-nested-list"
      }, list.map(function (list, index) {
        return React.createElement(_ListTree["default"], (0, _extends2["default"])({
          collapsesOpened: _this2.state.collapsesOpened,
          key: index,
          separator: separator,
          globalOnClick: globalOnClick,
          onFavorite: onFavorite,
          multipleList: multipleList
        }, list));
      }));
    }
  }]);
  return ListTreeGroup;
}(React.Component);

ListTreeGroup.defaultProps = {
  list: [],
  collapsesOpened: 1,
  separator: false
};
var _default = ListTreeGroup;
exports["default"] = _default;