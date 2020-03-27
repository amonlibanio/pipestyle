"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _Anchor = _interopRequireDefault(require("../Anchor"));

var Header = function Header(props) {
  var backButtonHref = props.backButtonHref,
      backButtonOnClick = props.backButtonOnClick,
      backButtonTitle = props.backButtonTitle,
      backgroundColor = props.backgroundColor,
      backgroundImage = props.backgroundImage,
      bottom = props.bottom,
      bottomLeft = props.bottomLeft,
      bottomRight = props.bottomRight,
      className = props.className,
      description = props.description,
      isMinimal = props.isMinimal,
      logoHref = props.logoHref,
      logoSrc = props.logoSrc,
      logoTitle = props.logoTitle,
      slogan = props.slogan,
      title = props.title,
      topRight = props.topRight;
  var headerProps = {
    className: (0, _classnames["default"])('pp-header', className, {
      'pp-header-minimal': isMinimal
    }),
    style: {}
  };

  if (backgroundColor !== undefined && backgroundColor.length > 0) {
    headerProps.style.background = backgroundColor;
  }

  if (backgroundImage !== undefined && backgroundImage.length > 0) {
    headerProps.className = (0, _classnames["default"])(headerProps.className, 'pp-header-overlay');
    headerProps.style.backgroundImage = "url(".concat(backgroundImage, ")");
  }

  var hasBottom = bottom !== undefined;
  return React.createElement("header", headerProps, React.createElement("div", {
    className: "pp-header-back-button"
  }, (backButtonHref || backButtonOnClick) && React.createElement(_Anchor["default"], {
    className: "pp-ico-bold-arrow-left",
    title: backButtonTitle,
    href: backButtonHref,
    onClick: backButtonOnClick
  })), React.createElement("div", {
    className: "pp-header-logo-area"
  }, React.createElement(_Anchor["default"], {
    title: logoTitle,
    href: logoHref
  }, React.createElement("img", {
    src: logoSrc,
    alt: logoTitle
  })), title !== undefined && title.length && React.createElement(_Anchor["default"], {
    title: title,
    href: logoHref,
    className: "pp-header-logo-area-minimal"
  }, React.createElement("h1", {
    className: "pp-ellipsis pp-header-nav-title"
  }, title))), React.createElement("div", {
    className: "pp-header-nav"
  }, React.createElement("div", {
    className: "pp-header-nav-top"
  }, title !== undefined && title.length && React.createElement("h1", {
    className: "pp-header-nav-title"
  }, title, slogan !== undefined && slogan.length && " - ".concat(slogan), description !== undefined && React.createElement("span", {
    dangerouslySetInnerHTML: {
      __html: " - ".concat(description)
    }
  })), React.createElement("div", {
    className: "pp-header-nav-actions"
  }, topRight)), React.createElement("div", {
    className: "pp-header-nav-bottom"
  }, bottom, !hasBottom && React.createElement("div", {
    className: "pp-header-nav-bottom-menu"
  }, bottomLeft), !hasBottom && React.createElement("div", {
    className: "pp-header-nav-bottom-actions"
  }, bottomRight))));
};

Header.defaultProps = {
  logoHref: '/',
  isMinimal: false
};
var _default = Header;
exports["default"] = _default;