"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Anchor = _interopRequireDefault(require("../Anchor"));

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(Object(source), true).forEach(function (key) { (0, _defineProperty2["default"])(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(Object(source)).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

var ListItem = function ListItem(props) {
  var actions = props.actions,
      children = props.children,
      className = props.className,
      current = props.current,
      extra = props.extra,
      href = props.href,
      labelColor = props.labelColor,
      leftIcon = props.leftIcon,
      linkClassName = props.linkClassName,
      onClick = props.onClick,
      position = props.position,
      rightIcon = props.rightIcon,
      tabIndex = props.tabIndex,
      title = props.title,
      tagProps = props.tagProps;
  var itemClass = (0, _classnames["default"])('pp-list-item', className, {
    'pp-current-item': current,
    'pp-border': !onClick && !href
  });

  var renderActions = function renderActions() {
    return React.createElement("div", {
      className: "pp-list-actions"
    }, actions.map(function (action, i) {
      return React.createElement(_Anchor["default"], (0, _extends2["default"])({
        className: (0, _classnames["default"])(action.icon, action.className),
        key: i
      }, action));
    }));
  };

  var renderTitle = function renderTitle(data) {
    var anchorProps = _objectSpread({}, data, {}, tagProps, {
      href: href,
      onClick: onClick,
      tabIndex: tabIndex,
      title: title
    });

    var renderElement = function renderElement(props) {
      return React.createElement(props.tag, props.data, position && React.createElement("span", {
        className: "pp-list-position"
      }, position), labelColor && React.createElement("span", {
        className: "pp-label",
        style: {
          background: labelColor
        }
      }), React.createElement("h2", null, children));
    };

    if (props.tag !== _Anchor["default"]) {
      return renderElement({
        tag: props.tag,
        data: anchorProps
      });
    }

    if (!onClick && !href) {
      return renderElement({
        tag: 'div',
        data: data
      });
    }

    return renderElement({
      tag: _Anchor["default"],
      data: anchorProps
    });
  };

  var linkClass = (0, _classnames["default"])('pp-list-title', linkClassName);
  return React.createElement("li", {
    className: itemClass
  }, leftIcon ? React.createElement("div", {
    className: "".concat(linkClass, " ").concat(leftIcon)
  }, renderTitle({})) : renderTitle({
    className: linkClass
  }), rightIcon && React.createElement("span", {
    className: "".concat(rightIcon)
  }), actions && renderActions(), extra);
};

ListItem.defaultProps = {
  current: false,
  tabIndex: 0,
  tag: _Anchor["default"],
  tagProps: {}
};
var _default = ListItem;
exports["default"] = _default;