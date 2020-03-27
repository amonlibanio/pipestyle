"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Anchor = _interopRequireDefault(require("../Anchor"));

var Link = function Link(_ref) {
  var href = _ref.href,
      className = _ref.className,
      containerClassName = _ref.containerClassName,
      tabIndex = _ref.tabIndex,
      title = _ref.title,
      _onClick = _ref.onClick,
      globalOnClick = _ref.globalOnClick,
      id = _ref.id,
      label = _ref.label,
      sublabel = _ref.sublabel,
      onFavorite = _ref.onFavorite,
      isFavorite = _ref.isFavorite;
  var ddClassName = (0, _classnames["default"])('pp-nested-list-link', containerClassName);
  var anchorClassName = (0, _classnames["default"])('pp-nested-list-anchor', className);
  var starClass = isFavorite ? 'pp-color-orange pp-ico-star-fill' : 'pp-ico-star';
  return React.createElement("dd", {
    className: ddClassName
  }, onFavorite && React.createElement("button", {
    className: starClass,
    "data-testid": "list-tree-favorite-button",
    onClick: function onClick() {
      return onFavorite(id, isFavorite);
    }
  }), React.createElement(_Anchor["default"], {
    href: href,
    className: anchorClassName,
    tabIndex: tabIndex,
    title: title,
    onClick: function onClick(e) {
      return _onClick ? _onClick(e, id) : globalOnClick(e, id);
    }
  }, React.createElement("div", {
    className: "pp-nested-list-content"
  }, React.createElement("span", {
    className: "nested-list-label pp-ellipsis"
  }, label), sublabel && React.createElement("span", {
    className: "pp-nested-list-sublabel"
  }, sublabel))));
};

Link.defaultProps = {
  tabIndex: 1,
  label: '',
  title: '',
  href: '#',
  onClick: function onClick() {
    return null;
  }
};
var _default = Link;
exports["default"] = _default;