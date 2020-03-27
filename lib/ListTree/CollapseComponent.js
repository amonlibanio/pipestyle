"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Link = _interopRequireDefault(require("./Link"));

var _CollapseContainer = _interopRequireDefault(require("./CollapseContainer"));

var CollapseComponent = function CollapseComponent(_ref) {
  var className = _ref.className,
      isOpen = _ref.isOpen,
      label = _ref.label,
      list = _ref.list,
      onClick = _ref.onClick,
      onCollapse = _ref.onCollapse,
      toggleCollapse = _ref.toggleCollapse,
      sublabel = _ref.sublabel,
      tabIndex = _ref.tabIndex,
      title = _ref.title,
      titleClassName = _ref.titleClassName,
      globalOnClick = _ref.globalOnClick,
      onFavorite = _ref.onFavorite,
      multipleList = _ref.multipleList;
  var listClass = (0, _classnames["default"])('pp-nested-list-collapsed', {
    'pp-phase-list': !sublabel && !className,
    'pp-has-favorite': onFavorite
  });
  var collapseClass = (0, _classnames["default"])('pp-nested-dropdown', {
    'pp-active': isOpen
  });
  var collapseBtnClass = (0, _classnames["default"])('pp-no-border pp-no-bg pp-width-100 pp-text-left', {
    'pp-flex': label
  });

  var handleCollapse = function handleCollapse(e) {
    if (onCollapse) onCollapse(e);
    toggleCollapse(e);
  };

  var handleOnClick = function handleOnClick(e) {
    e.preventDefault();
    if (onClick) onClick(e);else if (globalOnClick) globalOnClick(e);else handleCollapse(e);
  };

  return React.createElement("dd", {
    className: listClass
  }, React.createElement("div", {
    className: collapseClass
  }, React.createElement("button", {
    className: collapseBtnClass,
    onClick: handleOnClick,
    tabIndex: tabIndex,
    title: title
  }, className && React.createElement("span", {
    className: className
  }), label && React.createElement("p", null, React.createElement("strong", null, label), sublabel)), React.createElement("button", {
    className: "pp-no-border pp-no-bg pp-ico-bold-arrow-down",
    title: title,
    onClick: handleCollapse,
    "data-testid": "collapse-arrow"
  })), list.length > 0 && isOpen && React.createElement("dl", null, list.map(function (item, index) {
    return item.list ? React.createElement(_CollapseContainer["default"], (0, _extends2["default"])({}, item, {
      key: index,
      defaultOpened: false,
      globalOnClick: globalOnClick,
      onFavorite: onFavorite,
      multipleList: multipleList
    })) : React.createElement(_Link["default"], (0, _extends2["default"])({}, item, {
      key: index,
      globalOnClick: globalOnClick,
      onFavorite: onFavorite
    }));
  })));
};

CollapseComponent.defaultProps = {
  list: [],
  tabIndex: 1,
  title: ''
};
var _default = CollapseComponent;
exports["default"] = _default;