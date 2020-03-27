"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var WhiteUpArrow = function WhiteUpArrow(_ref) {
  var arrowPositon = _ref.arrowPositon,
      arrowTheme = _ref.arrowTheme;
  return React.createElement("svg", {
    width: "26",
    height: "18",
    xmlns: "http://www.w3.org/2000/svg",
    xmlnsXlink: "http://www.w3.org/1999/xlink",
    className: arrowPositon
  }, React.createElement("defs", null, React.createElement("path", {
    d: "M142 96h-20v11.995a2 2 0 0 0 3.258 1.554L142 96z",
    id: "b",
    className: arrowTheme
  }), React.createElement("filter", {
    x: "-25%",
    y: "-42.9%",
    width: "150%",
    height: "171.4%",
    filterUnits: "objectBoundingBox",
    id: "a"
  }, React.createElement("feOffset", {
    dy: "-1",
    "in": "SourceAlpha",
    result: "shadowOffsetOuter1"
  }), React.createElement("feGaussianBlur", {
    stdDeviation: "1.5",
    "in": "shadowOffsetOuter1",
    result: "shadowBlurOuter1"
  }), React.createElement("feColorMatrix", {
    values: "0 0 0 0 0.389679104 0 0 0 0 0.529711216 0 0 0 0 0.721088435 0 0 0 0.5 0",
    "in": "shadowBlurOuter1"
  }))), React.createElement("g", {
    transform: "matrix(-1 0 0 1 145 -96)",
    fill: "none",
    fillRule: "evenodd"
  }, React.createElement("use", {
    fill: "#000",
    filter: "url(#a)",
    xlinkHref: "#b"
  }), React.createElement("use", {
    fill: "#FFF",
    xlinkHref: "#b"
  })));
};

var _default = WhiteUpArrow;
exports["default"] = _default;