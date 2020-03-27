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

var _reactPortal = require("react-portal");

var _Anchor = _interopRequireDefault(require("../../Anchor"));

var _Button = _interopRequireDefault(require("../../Button"));

var _Icon = _interopRequireDefault(require("../../Icon"));

var _utils = require("../utils");

var _constants = require("../constants");

var AttachmentsGallery =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(AttachmentsGallery, _React$Component);

  function AttachmentsGallery() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, AttachmentsGallery);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(AttachmentsGallery)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      current: _this.props.files.findIndex(function (file) {
        return file.key === _this.props.currentFile.key;
      }),
      iframeLoading: true
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "keyboardEventHandler", function (event) {
      switch (event.keyCode) {
        case _constants.KeyCode.ArrowLeft:
          _this.previousFile();

          return;

        case _constants.KeyCode.ArrowRight:
          _this.nextFile();

          return;

        case _constants.KeyCode.Escape:
          _this.props.onClose();

          return;

        default:
          return;
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "previousFile", function () {
      if (_this.state.current > 0) _this.setState(function (_ref) {
        var current = _ref.current;
        return {
          current: current - 1,
          iframeLoading: true
        };
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "nextFile", function () {
      var current = _this.state.current;
      if (current < _this.props.files.length - 1) _this.setState(function (_ref2) {
        var current = _ref2.current;
        return {
          current: current + 1,
          iframeLoading: true
        };
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showIframe", function () {
      _this.setState({
        iframeLoading: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "handleClickOutside", function () {
      _this.props.onClose();

      console.log('click outside');
    });
    return _this;
  }

  (0, _createClass2["default"])(AttachmentsGallery, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener('keydown', this.keyboardEventHandler);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener('keydown', this.keyboardEventHandler);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          onClose = _this$props.onClose,
          files = _this$props.files,
          downloadPlaceholder = _this$props.downloadPlaceholder,
          _this$props$docViewer = _this$props.docViewerUrl,
          docViewerUrl = _this$props$docViewer === void 0 ? 'https://docs.google.com/gview?embedded=true&url=' : _this$props$docViewer;
      var _this$state = this.state,
          current = _this$state.current,
          iframeLoading = _this$state.iframeLoading;
      var _files$current = files[current],
          key = _files$current.key,
          name = _files$current.name,
          url = _files$current.url;
      var isLoading = (0, _classnames["default"])({
        'pp-frame-loading': iframeLoading
      });
      var firstItem = (0, _classnames["default"])({
        'pp-disabled pp-opacity-3': current === 0
      });
      var lastItem = (0, _classnames["default"])({
        'pp-disabled pp-opacity-3': current === files.length - 1
      });
      return React.createElement(_reactPortal.Portal, {
        isOpened: true
      }, React.createElement("div", {
        className: "pp-attachment-gallery"
      }, React.createElement("div", {
        className: "pp-overlay",
        onClick: onClose
      }), React.createElement(_Button["default"], {
        id: "close-gallery",
        className: "pp-modals-close",
        onClick: onClose
      }, React.createElement("span", {
        "aria-hidden": "true"
      }, "\xD7")), React.createElement("div", {
        className: "pp-attachment-gallery-content"
      }, React.createElement(_Button["default"], {
        theme: "dark",
        onClick: this.previousFile,
        className: firstItem
      }, React.createElement(_Icon["default"], {
        className: "pp-ico-arrow-left"
      })), React.createElement("div", {
        className: "pp-attachment-gallery-content-preview"
      }, (0, _utils.isImage)(name) && React.createElement("img", {
        alt: name,
        "data-testid": "attachment-preview-img",
        src: url
      }), !(0, _utils.isImage)(name) && React.createElement(React.Fragment, null, iframeLoading && React.createElement(_Icon["default"], {
        className: "pp-ico-loading"
      }), React.createElement("div", {
        className: isLoading
      }, React.createElement("iframe", {
        src: "".concat(docViewerUrl).concat(url, "&embedded=true"),
        onLoad: this.showIframe
      }))), React.createElement("div", {
        className: "pp-attachment-gallery-content-footer"
      }, React.createElement("p", null, name), React.createElement(_Anchor["default"], {
        className: "pp-btn-sm",
        title: downloadPlaceholder || 'Download',
        href: url
      }, downloadPlaceholder || 'Download'))), React.createElement(_Button["default"], {
        className: lastItem,
        theme: "dark",
        onClick: this.nextFile
      }, React.createElement(_Icon["default"], {
        className: "pp-ico-arrow-right"
      })))));
    }
  }]);
  return AttachmentsGallery;
}(React.Component);

exports["default"] = AttachmentsGallery;