'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var isChrome = /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor);
var isSafari = /Safari/.test(navigator.userAgent) && /Apple Computer/.test(navigator.vendor);
var isWebkit = isChrome || isSafari;

var truncateText = '…';
var containerStyle = { width: '100%', height: '100%', overflow: 'hidden' };

var LineClamp = function (_Component) {
  _inherits(LineClamp, _Component);

  function LineClamp() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, LineClamp);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = LineClamp.__proto__ || Object.getPrototypeOf(LineClamp)).call.apply(_ref, [this].concat(args))), _this), _this.state = {
      trimmedText: null
    }, _this.update = function () {
      _this.forceUpdate();
    }, _this.processRef = function (scope) {
      if (scope && !isWebkit) _this.setRenderText(scope);
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(LineClamp, [{
    key: 'measureWidth',
    value: function measureWidth(text) {
      return this.canvas.measureText(text).width;
    }
  }, {
    key: 'setRenderText',
    value: function setRenderText(scope) {
      var _props = this.props,
          lines = _props.lines,
          text = _props.text;


      var canvas = document.createElement('canvas');
      var docFragment = document.createDocumentFragment();
      var style = window.getComputedStyle(scope);
      var font = [style['font-weight'], style['font-style'], style['font-size'], style['font-family']].join(' ');

      docFragment.appendChild(canvas);
      this.canvas = canvas.getContext('2d');
      this.canvas.font = font;

      var scopeWidth = scope.getBoundingClientRect().width;

      // return if display:none
      if (scopeWidth === 0) {
        return null;
      }

      // return if all of text can be displayed
      if (scopeWidth >= this.measureWidth(text)) {
        this.setState({ trimmedText: text });
        return;
      }

      var childText = '';
      var currentPos = 1;
      var maxTextLength = text.length;
      var truncatedText = '';
      var splitPos = 0;
      var startPos = 0;
      var displayLine = lines;
      var width = 0;
      var lastIsEng = false;
      var lastSpaceIndex = -1;

      while (displayLine--) {
        var ext = displayLine ? '' : truncateText + ' ' + childText;
        while (currentPos <= maxTextLength) {
          truncatedText = text.substr(startPos, currentPos);
          width = this.measureWidth(truncatedText + ext);
          if (width < scopeWidth) {
            splitPos = text.indexOf(' ', currentPos + 1);
            if (splitPos === -1) {
              currentPos += 1;
              lastIsEng = false;
            } else {
              lastIsEng = true;
              currentPos = splitPos;
            }
          } else {
            do {
              currentPos--;
              truncatedText = text.substr(startPos, currentPos);
              if (truncatedText[truncatedText.length - 1] === ' ') {
                truncatedText = text.substr(startPos, currentPos - 1);
              }
              if (lastIsEng) {
                lastSpaceIndex = truncatedText.lastIndexOf(' ');
                if (lastSpaceIndex > -1) {
                  currentPos = lastSpaceIndex;
                  truncatedText = text.substr(startPos, currentPos);
                }
              }
              width = this.measureWidth(truncatedText + ext);
            } while (width >= scopeWidth);
            startPos += currentPos;
            break;
          }
        }

        if (currentPos >= maxTextLength) {
          startPos = maxTextLength;
          break;
        }
      }

      if (startPos === maxTextLength) {
        this.setState({ trimmedText: text });
        return;
      } else {
        this.setState({ trimmedText: truncatedText + truncateText });
        return;
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props2 = this.props,
          lines = _props2.lines,
          text = _props2.text,
          domProps = _objectWithoutProperties(_props2, ['lines', 'text']);

      var style = !isWebkit ? containerStyle : _extends({}, containerStyle, { display: '-webkit-box', WebkitLineClamp: lines, 'something': 1, WebkitBoxOrient: 'vertical' });

      return _react2.default.createElement(
        'div',
        _extends({}, domProps, { ref: this.processRef, style: style }),
        this.state.trimmedText || text
      );
    }
  }]);

  return LineClamp;
}(_react.Component);

LineClamp.propTypes = {
  lines: _react2.default.PropTypes.number,
  text: _react2.default.PropTypes.string
};
LineClamp.defaultProps = {
  lines: 1,
  text: ''
};
exports.default = LineClamp;
