"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _CardBadges = _interopRequireDefault(require("./CardBadges"));

var _CardContent = _interopRequireDefault(require("./CardContent"));

var _CardFooter = _interopRequireDefault(require("./CardFooter"));

var _CardHeader = _interopRequireDefault(require("./CardHeader"));

var _CardLabels = _interopRequireDefault(require("./CardLabels"));

var _CardStats = _interopRequireDefault(require("./CardStats"));

var _CardSubFooter = _interopRequireDefault(require("./CardSubFooter"));

var _CardSubtitles = _interopRequireDefault(require("./CardSubtitles"));

var _CardUsers = _interopRequireDefault(require("./CardUsers"));

var _CardWrapper = _interopRequireDefault(require("./CardWrapper"));

var Card = function Card(props) {
  var className = props.className,
      children = props.children;
  var customClass = (0, _classnames["default"])('pp-card', className);
  return React.createElement("div", (0, _extends2["default"])({}, props, {
    className: customClass
  }), children);
};

Card.Badges = _CardBadges["default"];
Card.Content = _CardContent["default"];
Card.Footer = _CardFooter["default"];
Card.Header = _CardHeader["default"];
Card.Labels = _CardLabels["default"];
Card.Stats = _CardStats["default"];
Card.SubFooter = _CardSubFooter["default"];
Card.Subtitles = _CardSubtitles["default"];
Card.Users = _CardUsers["default"];
Card.Wrapper = _CardWrapper["default"];
var _default = Card;
exports["default"] = _default;