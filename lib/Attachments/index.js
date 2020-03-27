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

var _reactDropzone = _interopRequireDefault(require("react-dropzone"));

var _classnames = _interopRequireDefault(require("classnames"));

var _components = require("./components");

var _utils = require("./utils");

var EMPTY_STYLE = {};
var GALLERY_VIWEABLE = /\.(tif|tiff|gif|jpeg|jpg|jif|jfif|jp2|jpx|j2k|j2c|png|bmp|webp|heif|xlsx|pdf|docx)$/gim;

var Attachments =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(Attachments, _React$Component);

  function Attachments() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Attachments);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Attachments)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      showDropPlaceholder: false,
      showGallery: false,
      showFile: null
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "showDropPlaceholder", function () {
      return _this.setState({
        showDropPlaceholder: true
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "hideDropPlaceholder", function () {
      return _this.setState({
        showDropPlaceholder: false
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "openGallery", function (file) {
      return function (e) {
        if (file.name.match(GALLERY_VIWEABLE)) {
          e && e.preventDefault();

          _this.setState({
            showGallery: true,
            showFile: file
          });
        }
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "closeGallery", function () {
      return _this.setState({
        showGallery: false,
        showFile: null
      });
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "onRemove", function (file) {
      return function (e) {
        _this.props.onRemove(file);

        e.preventDefault();
      };
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "openDropzone", function (open) {
      return function (e) {
        e.preventDefault();
        open();
      };
    });
    return _this;
  }

  (0, _createClass2["default"])(Attachments, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$props = this.props,
          emptyStatePlaceholder = _this$props.emptyStatePlaceholder,
          dropPlaceholder = _this$props.dropPlaceholder,
          buttonPlaceholder = _this$props.buttonPlaceholder,
          onDrop = _this$props.onDrop,
          maxFileSize = _this$props.maxFileSize,
          disableClick = _this$props.disableClick,
          files = _this$props.files,
          className = _this$props.className,
          simpleField = _this$props.simpleField,
          simpleFieldPlaceholder = _this$props.simpleFieldPlaceholder,
          downloadPlaceholder = _this$props.downloadPlaceholder,
          readOnly = _this$props.readOnly,
          style = _this$props.style,
          setRef = _this$props.setRef,
          showButton = _this$props.showButton,
          accept = _this$props.accept,
          showListButton = _this$props.showListButton;
      var _this$state = this.state,
          showDropPlaceholder = _this$state.showDropPlaceholder,
          showGallery = _this$state.showGallery,
          showFile = _this$state.showFile;
      return React.createElement("div", {
        className: (0, _classnames["default"])(className, 'pp-attachment-list'),
        style: style
      }, !(0, _utils.isEmpty)(files) && files.map(function (file) {
        return React.createElement(_components.Attachment, {
          key: file.key || file.name,
          file: file,
          onRemove: !readOnly ? _this2.onRemove(file) : undefined,
          onClick: _this2.openGallery(file)
        });
      }), React.createElement(_reactDropzone["default"], {
        ref: setRef,
        onDrop: !readOnly ? onDrop : undefined,
        onDragOver: this.showDropPlaceholder,
        onDragLeave: this.hideDropPlaceholder,
        onDropAccepted: this.hideDropPlaceholder,
        onDropRejected: this.hideDropPlaceholder,
        maxSize: maxFileSize,
        disableClick: disableClick || readOnly,
        className: (0, _classnames["default"])({
          'pp-dropzone-placeholder': showDropPlaceholder
        }),
        style: EMPTY_STYLE,
        acceptStyle: EMPTY_STYLE,
        activeStyle: EMPTY_STYLE,
        accept: accept
      }, function (_ref) {
        var open = _ref.open;
        return readOnly ? null : React.createElement(React.Fragment, null, !simpleField && React.createElement(_components.FullAttachmentField, {
          onClickButton: _this2.openDropzone(open),
          showDropPlaceholder: showDropPlaceholder,
          dropPlaceholder: dropPlaceholder,
          isEmpty: (0, _utils.isEmpty)(files),
          emptyStatePlaceholder: emptyStatePlaceholder,
          buttonPlaceholder: buttonPlaceholder,
          showButton: showButton,
          showListButton: showListButton
        }), simpleField && React.createElement(_components.SimpleAttachmentField, {
          placeholder: simpleFieldPlaceholder
        }));
      }), showGallery && showFile && React.createElement(_components.AttachmentsGallery, {
        currentFile: showFile,
        files: (0, _utils.removeInProgressFiles)(files),
        onClose: this.closeGallery,
        downloadPlaceholder: downloadPlaceholder
      }));
    }
  }]);
  return Attachments;
}(React.Component);

exports["default"] = Attachments;
(0, _defineProperty2["default"])(Attachments, "defaultProps", {
  disableClick: false,
  showButton: false,
  showListButton: true,
  simpleField: false,
  emptyStatePlaceholder: '',
  dropPlaceholder: '',
  buttonPlaceholder: '',
  simpleFieldPlaceholder: '',
  readOnly: false
});