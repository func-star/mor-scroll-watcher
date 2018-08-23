'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _monaEvents = require('mona-events');

var _monaEvents2 = _interopRequireDefault(_monaEvents);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /**
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    created by yangxi on 2018-08-23
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                *    单页面提供唯一key
                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                */

var Ctrl = function (_Events) {
  _inherits(Ctrl, _Events);

  function Ctrl() {
    _classCallCheck(this, Ctrl);

    return _possibleConstructorReturn(this, (Ctrl.__proto__ || Object.getPrototypeOf(Ctrl)).apply(this, arguments));
  }

  return Ctrl;
}(_monaEvents2.default);

exports.default = new Ctrl();