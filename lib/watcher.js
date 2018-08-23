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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var ScrollWatcher = function () {
	function ScrollWatcher(props) {
		_classCallCheck(this, ScrollWatcher);

		this.options = _extends({}, props);
		this.wrapHeight = this.options.wrap.clientHeight;
		this._bindEvents();
		if (this.options.initEmit) {
			_ctrl2.default.emit(this.options.watcherId, _extends({
				scrollTop: 0,
				wrapHeight: this.wrapHeight
			}, this.options));
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
				_ctrl2.default.emit(_this.options.watcherId, _extends({
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