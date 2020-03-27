"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _ = require("..");

var _VideoModal = _interopRequireDefault(require("./VideoModal"));

var VideoPopover =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(VideoPopover, _React$Component);

  function VideoPopover() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, VideoPopover);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(VideoPopover)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      isVideoOpened: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClosePopover", function (e) {
      var onClosePopover = _this.props.onClosePopover;
      e.preventDefault();
      onClosePopover();
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "playVideo", function (e) {
      e.preventDefault();

      _this.setState({
        isVideoOpened: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "closeModal", function () {
      _this.setState({
        isVideoOpened: false
      });
    });
    return _this;
  }

  (0, _createClass2["default"])(VideoPopover, [{
    key: "render",
    value: function render() {
      var isVideoOpened = this.state.isVideoOpened;
      var playVideo = this.playVideo,
          closeModal = this.closeModal,
          handleClosePopover = this.handleClosePopover;
      var _this$props = this.props,
          arrowPosition = _this$props.arrowPosition,
          autoPlay = _this$props.autoPlay,
          children = _this$props.children,
          className = _this$props.className,
          closeModalAtEnd = _this$props.closeModalAtEnd,
          imgAlt = _this$props.imgAlt,
          imgSrc = _this$props.imgSrc,
          onClosePopover = _this$props.onClosePopover,
          onVideoEnd = _this$props.onVideoEnd,
          onVideoStart = _this$props.onVideoStart,
          options = _this$props.options,
          popoverTheme = _this$props.popoverTheme,
          popoverTitle = _this$props.popoverTitle,
          titleClosePopover = _this$props.titleClosePopover,
          videoId = _this$props.videoId,
          videoProvider = _this$props.videoProvider;
      var popoverClass = (0, _classnames["default"])('pp-video-popover', className);
      return React.createElement(_.Popover, {
        arrowPosition: arrowPosition,
        className: popoverClass,
        theme: popoverTheme
      }, onClosePopover && React.createElement("button", {
        className: "pp-ico-close pp-no-bg pp-no-border",
        onClick: handleClosePopover,
        title: titleClosePopover
      }), React.createElement("header", {
        className: "pp-header-title"
      }, popoverTitle && popoverTitle), React.createElement("div", {
        className: "pp-tutorial-video pp-cursor-pointer"
      }, React.createElement("img", {
        alt: imgAlt,
        srcSet: imgSrc
      }), React.createElement("button", {
        onClick: playVideo,
        className: "pp-tutorial-video-overlay pp-no-border"
      }, React.createElement(_.Icon, {
        className: "pp-video-button pp-no-border"
      }))), isVideoOpened && (children ? React.cloneElement(children, {
        closeModal: this.closeModal,
        videoId: videoId,
        videoProvider: videoProvider
      }) : React.createElement(_VideoModal["default"], {
        autoPlay: autoPlay,
        closeModal: closeModal,
        closeModalAtEnd: closeModalAtEnd,
        onVideoEnd: onVideoEnd,
        onVideoStart: onVideoStart,
        options: options,
        videoId: videoId,
        videoProvider: videoProvider
      })));
    }
  }]);
  return VideoPopover;
}(React.Component);

(0, _defineProperty2["default"])(VideoPopover, "defaultProps", {
  closeModalAtEnd: true,
  onClosePopover: function onClosePopover() {},
  onVideoEnd: function onVideoEnd() {},
  onVideoStart: function onVideoStart() {},
  popoverTheme: 'dark',
  titleClosePopover: 'close',
  options: {}
});
var _default = VideoPopover;
exports["default"] = _default;