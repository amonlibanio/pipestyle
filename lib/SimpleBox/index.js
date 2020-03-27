"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Anchor = _interopRequireDefault(require("../Anchor"));

var _Badge = _interopRequireDefault(require("../Badge"));

var _SimpleBoxFooter = _interopRequireDefault(require("./SimpleBoxFooter"));

var chartTypes = {
  up: 'pp-ico-caret-up',
  down: 'pp-ico-caret-down',
  none: 'pp-ico-check'
};
var chartTheme = {
  up: 'success',
  down: 'danger',
  none: 'info'
};

var SimpleBox = function SimpleBox(props) {
  var value = props.value,
      chart = props.chart,
      chartDescription = props.chartDescription,
      chartsClassName = props.chartsClassName,
      children = props.children,
      chartValue = props.chartValue,
      className = props.className,
      description = props.description,
      href = props.href,
      hrefTitle = props.hrefTitle,
      hrefTabIndex = props.hrefTabIndex;
  var chartTypeClasses = (0, _classnames["default"])(chartsClassName, chartTypes[chart]);
  var chartBox = React.createElement("span", {
    className: "pp-case-chart-box"
  }, React.createElement(_Badge["default"], {
    theme: chartTheme[chart],
    light: true,
    className: chartTypeClasses
  }, chartValue), React.createElement("span", {
    className: "pp-case-span"
  }, chartDescription));
  var caseClassName = (0, _classnames["default"])('pp-case-link', className);
  var titleClassName = (0, _classnames["default"])('pp-case-title', {
    'pp-case-title-max-width': chart
  });
  return React.createElement("div", {
    className: "pp-case"
  }, React.createElement(_Anchor["default"], {
    href: href,
    title: hrefTitle,
    tabIndex: hrefTabIndex,
    className: caseClassName
  }, React.createElement("div", {
    className: "pp-case-header"
  }, React.createElement("h2", {
    className: titleClassName
  }, value), chart && chartBox), React.createElement("p", {
    className: "pp-case-description"
  }, description)), children);
};

SimpleBox.defaultProps = {
  value: '--'
};
SimpleBox.Footer = _SimpleBoxFooter["default"];
var _default = SimpleBox;
exports["default"] = _default;