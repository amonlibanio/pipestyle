"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf2 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _react = _interopRequireWildcard(require("react"));

var _reactHelmet = require("react-helmet");

var _Wrapper = _interopRequireDefault(require("../ui/Wrapper"));

var _Pages = _interopRequireDefault(require("../ui/Pages"));

require("../assets/stylesheets/docs.sass");

require("../assets/stylesheets/pipestyle.sass");

require("../assets/stylesheets/libs.sass");

var TemplateWrapper =
/*#__PURE__*/
function (_Component) {
  (0, _inherits2["default"])(TemplateWrapper, _Component);

  function TemplateWrapper() {
    (0, _classCallCheck2["default"])(this, TemplateWrapper);
    return (0, _possibleConstructorReturn2["default"])(this, (0, _getPrototypeOf2["default"])(TemplateWrapper).apply(this, arguments));
  }

  (0, _createClass2["default"])(TemplateWrapper, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var fav;
      window.addEventListener('blur', function () {
        fav = document.querySelector('#favicon');

        if (fav) {
          fav.href = 'https://d3l2kwhcxt3ou6.cloudfront.net/images/0bb4da97bb1d0a33.gif';
        }
      });
      window.addEventListener('focus', function () {
        fav = document.querySelector('#favicon');

        if (fav) {
          fav.href = 'https://d3l2kwhcxt3ou6.cloudfront.net/images/favicon.png';
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          location = _this$props.location;
      return _react["default"].createElement("div", null, _react["default"].createElement(_reactHelmet.Helmet, {
        bodyAttributes: {
          "class": 'pp-theme-pipefy'
        }
      }), _react["default"].createElement(_reactHelmet.Helmet, null, _react["default"].createElement("link", {
        rel: "shortcut icon",
        href: "https://d3l2kwhcxt3ou6.cloudfront.net/images/favicon.png",
        id: "favicon"
      }), _react["default"].createElement("meta", {
        name: "theme-color",
        content: "#e6ecf5"
      }), _react["default"].createElement("meta", {
        name: "description",
        content: "A design system with values of Nature and Determinacy for better user experience of enterprise applications."
      }), _react["default"].createElement("meta", {
        property: "og:title",
        content: "Pipefy Design System - Build it once, use it on all"
      }), _react["default"].createElement("meta", {
        property: "og:description",
        content: "A design system with values of Nature and Determinacy for better user experience of enterprise applications."
      }), _react["default"].createElement("meta", {
        property: "og:image",
        content: "http://d3l2kwhcxt3ou6.cloudfront.net/images/fb_share_pipestyle.png"
      }), _react["default"].createElement("meta", {
        name: "google-site-verification",
        content: "GM38zTxzfHrYkpCxCpZj0uaA-6sS58dh85fVpcMcpRM"
      })), location.pathname !== '/' ? _react["default"].createElement("div", null, /^\/documentation/.test(location.pathname) ? _react["default"].createElement(_Wrapper["default"], {
        location: location
      }, children) : _react["default"].createElement(_Pages["default"], {
        location: location
      }, children)) : children);
    }
  }]);
  return TemplateWrapper;
}(_react.Component);

var _default = TemplateWrapper;
exports["default"] = _default;