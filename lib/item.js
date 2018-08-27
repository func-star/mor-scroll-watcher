'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _ctrl = require('./ctrl');

var _ctrl2 = _interopRequireDefault(_ctrl);

var _idStore = require('./idStore');

var _idStore2 = _interopRequireDefault(_idStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ScrollWatcherItem = function (_Component) {
	_inherits(ScrollWatcherItem, _Component);

	function ScrollWatcherItem() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, ScrollWatcherItem);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ScrollWatcherItem.__proto__ || Object.getPrototypeOf(ScrollWatcherItem)).call.apply(_ref, [this].concat(args))), _this), _this.monaId = _this.props.monaId || _idStore2.default.defaultId, _temp), _possibleConstructorReturn(_this, _ret);
	}

	_createClass(ScrollWatcherItem, [{
		key: 'componentDidMount',
		value: function componentDidMount() {
			var monaId = this.monaId;
			if (!_idStore2.default.isIdExisted(monaId)) {
				_idStore2.default.setWrapId(monaId);
			}

			this.offsetTop = this.refs.item.offsetTop;
			this.monaWatcher = this.watcher.bind(this);

			this.monaWatcher.id = _idStore2.default.getItemCallbackKey(monaId);
			_ctrl2.default.on(monaId, this.monaWatcher);
		}
	}, {
		key: 'watcher',
		value: function watcher(info) {
			if (info.type) {
				debugger;
				console.log(1);
			}
			if (this.offsetTop - info.scrollTop < info.wrapHeight - info.bottomEmit) {
				_ctrl2.default.off(this.monaId, this.monaWatcher);
				this.props.onWatcher && this.props.onWatcher();
			}
		}
	}, {
		key: 'render',
		value: function render() {
			var _props = this.props,
			    className = _props.className,
			    monaId = _props.monaId,
			    onWatcher = _props.onWatcher,
			    children = _props.children,
			    props = _objectWithoutProperties(_props, ['className', 'monaId', 'onWatcher', 'children']);

			var klass = 'mona-scroll-watcher';
			if (className) {
				klass = klass + ' ' + className;
			}
			return _react2.default.createElement(
				'div',
				_extends({ className: klass }, props, { ref: 'item' }),
				children
			);
		}
	}]);

	return ScrollWatcherItem;
}(_react.Component);

exports.default = ScrollWatcherItem;