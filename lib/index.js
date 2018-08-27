'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _item = require('./item');

var _item2 = _interopRequireDefault(_item);

var _ctrl = require('./ctrl');

var _ctrl2 = _interopRequireDefault(_ctrl);

var _idStore = require('./idStore');

var _idStore2 = _interopRequireDefault(_idStore);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScrollWatcher = function () {
	function ScrollWatcher(props) {
		_classCallCheck(this, ScrollWatcher);

		this.defaultOptions = {
			watcherInterval: 200, // 滚动检测时间间隔
			bottomEmit: 0, // 距离底部多少时触发
			monaId: _idStore2.default.defaultId,
			initEmit: true // 是否初始化触发一次
		};

		if (!props.wrap) {
			throw new Error('滚动监听的容器不允许为空！');
		}
		ScrollWatcher.options = this.options = _extends(this.defaultOptions, props);

		var _options = this.options,
		    wrap = _options.wrap,
		    initEmit = _options.initEmit,
		    monaId = _options.monaId,
		    options = _objectWithoutProperties(_options, ['wrap', 'initEmit', 'monaId']);

		if (!_idStore2.default.isIdExisted(monaId)) {
			throw new Error('monaId不存在，请检查属性monaId是否正确！');
		}
		if (_idStore2.default.isInstanceIdExisted(monaId)) {
			throw new Error('monaId已经被实例化，请检查属性monaId是否正确！');
		} else {
			_idStore2.default.setInstanceId(monaId);
		}

		ScrollWatcher.wrapHeight = this.wrapHeight = wrap.clientHeight;
		this._bindEvents();
		if (initEmit) {
			_ctrl2.default.emit(monaId, _extends({
				scrollTop: 0,
				wrapHeight: this.wrapHeight
			}, options));
		}
	}

	// 绑定滚动事件


	_createClass(ScrollWatcher, [{
		key: '_bindEvents',
		value: function _bindEvents() {
			var wrap = this.options.wrap;

			wrap.addEventListener('scroll', this._scroll.bind(this), false);
		}

		// 滚动事件

	}, {
		key: '_scroll',
		value: function _scroll(e) {
			var _this = this;

			if (this.isTiming) {
				return;
			}
			this.isTiming = true;
			var watcherInterval = this.options.watcherInterval;

			clearTimeout(this.timer);
			this.timer = setTimeout(function () {
				_ctrl2.default.emit(_this.options.monaId, _extends({
					scrollTop: e.target.scrollTop,
					wrapHeight: _this.wrapHeight
				}, _this.options));
				_this.isTiming = false;
			}, watcherInterval);
		}
	}]);

	return ScrollWatcher;
}();

ScrollWatcher.item = _item2.default;
exports.default = ScrollWatcher;