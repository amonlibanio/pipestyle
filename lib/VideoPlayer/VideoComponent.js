"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

require("core-js/modules/web.dom.iterable");

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var React = _interopRequireWildcard(require("react"));

var VideoComponent =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2["default"])(VideoComponent, _React$Component);

  function VideoComponent() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, VideoComponent);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(VideoComponent)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      played: false
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "validateVideoEvents", function () {
      var _this$props = _this.props,
          onVideoEnd = _this$props.onVideoEnd,
          closeModal = _this$props.closeModal,
          closeModalAtEnd = _this$props.closeModalAtEnd;
      var played = _this.state.played;

      if (_this.player) {
        _this.player.on('play', function () {
          if (played === false) {
            _this.setOnPlayEvent();
          }
        });

        _this.player.on('ended', function () {
          onVideoEnd();
          closeModalAtEnd && closeModal();
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "setOnPlayEvent", function () {
      var onVideoStart = _this.props.onVideoStart;
      var played = _this.state.played;

      if (played === false) {
        _this.setState({
          played: true
        }, function () {
          onVideoStart && onVideoStart();
        });
      }
    });
    return _this;
  }

  (0, _createClass2["default"])(VideoComponent, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var _this$props2 = this.props,
          options = _this$props2.options,
          autoPlay = _this$props2.autoPlay;

      var Plyr = require('plyr');

      this.player = new Plyr('#plyr-player', options);
      this.validateVideoEvents();
      this.player.on('ready', function () {
        return autoPlay && _this2.player.play();
      });
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      if (this.player.length > 0) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = this.player[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var playerEl = _step.value;
            playerEl.destroy();
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator["return"] != null) {
              _iterator["return"]();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props3 = this.props,
          videoId = _this$props3.videoId,
          videoProvider = _this$props3.videoProvider;
      return React.createElement("div", {
        id: "plyr-player",
        "data-plyr-provider": videoProvider,
        "data-plyr-embed-id": videoId
      });
    }
  }]);
  return VideoComponent;
}(React.Component);

(0, _defineProperty2["default"])(VideoComponent, "defaultProps", {
  autoPlay: true,
  closeModal: function closeModal() {},
  closeModalAtEnd: true,
  onVideoEnd: function onVideoEnd() {},
  onVideoStart: function onVideoStart() {},
  options: {}
});
var _default = VideoComponent;
exports["default"] = _default;