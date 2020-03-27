"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports["default"] = void 0;

var _extends2 = _interopRequireDefault(require("@babel/runtime/helpers/extends"));

var _classCallCheck2 = _interopRequireDefault(require("@babel/runtime/helpers/classCallCheck"));

var _createClass2 = _interopRequireDefault(require("@babel/runtime/helpers/createClass"));

var _possibleConstructorReturn2 = _interopRequireDefault(require("@babel/runtime/helpers/possibleConstructorReturn"));

var _getPrototypeOf3 = _interopRequireDefault(require("@babel/runtime/helpers/getPrototypeOf"));

var _assertThisInitialized2 = _interopRequireDefault(require("@babel/runtime/helpers/assertThisInitialized"));

var _inherits2 = _interopRequireDefault(require("@babel/runtime/helpers/inherits"));

var _defineProperty2 = _interopRequireDefault(require("@babel/runtime/helpers/defineProperty"));

var _react = _interopRequireDefault(require("react"));

var _classnames = _interopRequireDefault(require("classnames"));

var _CarouselItem = _interopRequireDefault(require("./CarouselItem"));

var _CarouselFooter = _interopRequireDefault(require("./CarouselFooter"));

var Carousel =
/*#__PURE__*/
function (_React$PureComponent) {
  (0, _inherits2["default"])(Carousel, _React$PureComponent);

  function Carousel() {
    var _getPrototypeOf2;

    var _this;

    (0, _classCallCheck2["default"])(this, Carousel);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = (0, _possibleConstructorReturn2["default"])(this, (_getPrototypeOf2 = (0, _getPrototypeOf3["default"])(Carousel)).call.apply(_getPrototypeOf2, [this].concat(args)));
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "state", {
      slide: _this.props.initialSlide,
      isSliding: false,
      offset: 0,
      description: [],
      onSlideShow: [],
      className: []
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "pagination", function (slide) {
      var children = _this.props.children;
      var onSlideShow = _this.state.onSlideShow;

      var count = _react["default"].Children.count(children); // Execute the onShow function


      if (onSlideShow[slide] !== null) onSlideShow[slide]();
      if (slide === count) return;

      if (slide >= 0 && slide <= count) {
        _this.setState({
          slide: slide,
          isSliding: true,
          offset: 0
        }, function () {
          setTimeout(function () {
            _this.setState({
              isSliding: false
            });
          }, 600);
        });
      }
    });
    (0, _defineProperty2["default"])((0, _assertThisInitialized2["default"])(_this), "slideAnimation", function (hasItems, offset, slide) {
      if (!hasItems) return;
      return offset !== 0 ? "translateX(calc(".concat(offset * 1, "px - ").concat(slide * 100, "%))") : "translateX(-".concat(slide * 100, "%)");
    });
    return _this;
  }

  (0, _createClass2["default"])(Carousel, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var descriptions = [];
      var events = [];
      var classNames = [];
      var children = this.props.children;

      _react["default"].Children.forEach(children, function (item) {
        descriptions.push(item.props.description);
        events.push(item.props.onShow || null);
        classNames.push(item.props.className);
      });

      this.setState({
        description: descriptions,
        onSlideShow: events,
        className: classNames
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          children = _this$props.children,
          speed = _this$props.speed,
          transitionTimingFunction = _this$props.transitionTimingFunction;
      var _this$state = this.state,
          slide = _this$state.slide,
          isSliding = _this$state.isSliding,
          offset = _this$state.offset,
          description = _this$state.description,
          className = _this$state.className;

      var count = _react["default"].Children.count(children);

      var hasItems = count > 1;
      var itemDescriptionClass = (0, _classnames["default"])('pp-carousel-description', className[slide], {
        'pp-active': isSliding
      });
      return _react["default"].createElement("div", {
        className: "pp-carousel"
      }, _react["default"].createElement("p", {
        className: itemDescriptionClass
      }, description[slide]), _react["default"].createElement("ul", {
        className: "pp-carousel-frame",
        style: {
          transitionProperty: isSliding ? 'transform' : 'none',
          transform: this.slideAnimation(hasItems, offset, slide),
          transitionDuration: "".concat(speed, "s"),
          transitionTimingFunction: transitionTimingFunction
        }
      }, children), hasItems && _react["default"].createElement(_CarouselFooter["default"], (0, _extends2["default"])({}, this.props, {
        slide: slide,
        pagination: this.pagination
      })));
    }
  }]);
  return Carousel;
}(_react["default"].PureComponent);

(0, _defineProperty2["default"])(Carousel, "defaultProps", {
  dots: true,
  initialSlide: 0,
  nextLabel: 'Next',
  speed: 0.4,
  transitionTimingFunction: 'ease',
  prevLabel: 'Prev',
  arrowControls: false
});
Carousel.Item = _CarouselItem["default"];
var _default = Carousel;
exports["default"] = _default;