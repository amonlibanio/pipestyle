"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

exports.__esModule = true;
exports["default"] = void 0;

var React = _interopRequireWildcard(require("react"));

var _reactPortal = require("react-portal");

var _VideoComponent = _interopRequireDefault(require("./VideoComponent"));

var _ = require("../");

var VideoModal = function VideoModal(_ref) {
  var autoPlay = _ref.autoPlay,
      className = _ref.className,
      closeModal = _ref.closeModal,
      closeModalAtEnd = _ref.closeModalAtEnd,
      onVideoEnd = _ref.onVideoEnd,
      onVideoStart = _ref.onVideoStart,
      options = _ref.options,
      videoId = _ref.videoId,
      videoProvider = _ref.videoProvider;
  return React.createElement(_reactPortal.Portal, {
    isOpened: true
  }, React.createElement(_.Modal, {
    className: className,
    size: "lg",
    onClose: closeModal
  }, React.createElement(_.Modal.Header, {
    className: "pp-no-padding"
  }), React.createElement(_.Modal.Content, {
    className: "pp-no-padding"
  }, React.createElement(_VideoComponent["default"], {
    autoPlay: autoPlay,
    closeModal: closeModal,
    closeModalAtEnd: closeModalAtEnd,
    onVideoEnd: onVideoEnd,
    onVideoStart: onVideoStart,
    options: options,
    videoId: videoId,
    videoProvider: videoProvider
  }))));
};

VideoModal.defaultProps = {
  closeModal: function closeModal() {},
  closeModalAtEnd: true,
  onVideoEnd: function onVideoEnd() {},
  onVideoStart: function onVideoStart() {},
  options: {}
};
var _default = VideoModal;
exports["default"] = _default;