'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _watcher = require('./watcher');

var _watcher2 = _interopRequireDefault(_watcher);

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _keyStore = require('./keyStore');

var _keyStore2 = _interopRequireDefault(_keyStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var key = _keyStore2.default.getWrapKey();
var defaultOptions = {
	watcherInterval: 200, // 滚动检测时间间隔
	bottomEmit: 0, // 距离底部多少时触发
	watcherId: key,
	initEmit: true // 是否初始化触发一次
};

var ItemNB = function (_Item) {
	_inherits(ItemNB, _Item);

	function ItemNB() {
		var _ref;

		var _temp, _this, _ret;

		_classCallCheck(this, ItemNB);

		for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
			args[_key] = arguments[_key];
		}

		return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ItemNB.__proto__ || Object.getPrototypeOf(ItemNB)).call.apply(_ref, [this].concat(args))), _this), _this.watcherId = defaultOptions.watcherId, _temp), _possibleConstructorReturn(_this, _ret);
	}

	return ItemNB;
}(_item2.default);

var ScrollWatcher = function () {
	function ScrollWatcher() {
		_classCallCheck(this, ScrollWatcher);
	}

	_createClass(ScrollWatcher, null, [{
		key: 'init',
		value: function init(options) {
			var _options = options,
			    wrap = _options.wrap;

			if (!wrap) {
				throw new Error('滚动监听的容器不允许为空！');
			}

			options = _extends(defaultOptions, options);
			this.watcherInstance = new _watcher2.default(options);
		}
	}]);

	return ScrollWatcher;
}();

ScrollWatcher.item = ItemNB;
exports.default = ScrollWatcher;