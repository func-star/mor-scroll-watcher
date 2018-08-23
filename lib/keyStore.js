'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *    created by yangxi on 2018-08-23
 *    单页面提供唯一key
 */

var KeyStore = function () {
	function KeyStore() {
		_classCallCheck(this, KeyStore);

		this.keyStoreList = {};
		this.nameSpace = 'mona_scroll_watcher';
		this.wrapId = 1000;
	}

	_createClass(KeyStore, [{
		key: 'getWrapKey',
		value: function getWrapKey() {
			this.wrapId += 1;
			var wrapKey = this.nameSpace + '_' + this.wrapId;
			this.keyStoreList[wrapKey] = {
				itemKey: 1000
			};
			return wrapKey;
		}
	}, {
		key: 'getItemKey',
		value: function getItemKey(wrapKey) {
			this.keyStoreList[wrapKey].itemKey += 1;
			return this.keyStoreList[wrapKey].itemKey;
		}
	}]);

	return KeyStore;
}();

exports.default = new KeyStore();