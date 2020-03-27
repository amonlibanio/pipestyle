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

var _Link = _interopRequireDefault(require("./Link"));

var _CollapseContainer = _interopRequireDefault(require("./CollapseContainer"));

var ListTree =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(ListTree, _React$Component);

  function ListTree() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, ListTree);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(ListTree)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      collapsesOpened: _this.props.collapsesOpened
    });
    return _this;
  }

  (0, _createClass2["default"])(ListTree, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          title = _this$props.title,
          list = _this$props.list,
          separator = _this$props.separator,
          globalOnClick = _this$props.globalOnClick,
          onFavorite = _this$props.onFavorite,
          multipleListParent = _this$props.multipleList;
      var collapsesIndex = 0;
      var defaultCollapsesAreOpened = false;
      var multipleList = list.length > 1;
      return React.createElement("dl", null, title && React.createElement("dt", {
        className: "pp-ellipsis pp-color-dark_cachoal"
      }, title), list.map(function (item, index) {
        if (item.list) {
          collapsesIndex += 1;

          if (collapsesIndex > _this2.state.collapsesOpened) {
            defaultCollapsesAreOpened = true;
          }

          return React.createElement(_CollapseContainer["default"], (0, _extends2["default"])({}, item, {
            defaultOpened: !defaultCollapsesAreOpened,
            key: index,
            globalOnClick: globalOnClick,
            onFavorite: onFavorite,
            multipleList: multipleListParent || multipleList
          }));
        }

        return React.createElement(_Link["default"], (0, _extends2["default"])({}, item, {
          key: index,
          globalOnClick: globalOnClick,
          onFavorite: onFavorite
        }));
      }), separator && React.createElement("div", {
        className: "pp-list-separator-wrapper",
        "data-testid": "list-tree-separator"
      }, React.createElement("div", {
        className: "pp-list-separator"
      })));
    }
  }]);
  return ListTree;
}(React.Component);

var _default = ListTree;
exports["default"] = _default;