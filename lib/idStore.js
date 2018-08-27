"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 *    created by yangxi on 2018-08-23
 *    单页面提供唯一id
 */

var IdStore = function () {
	function IdStore() {
		_classCallCheck(this, IdStore);

		this.defaultId = "mona_scroll_watcher_" + Date.now();
		this.idStoreMap = {};
		this.instanceIdList = [];
	}

	_createClass(IdStore, [{
		key: "isIdExisted",


		// wrapId 是否已经存在
		value: function isIdExisted(wrapId) {
			return !!this.idStoreMap[wrapId];
		}

		// 存储 wrapId

	}, {
		key: "setWrapId",
		value: function setWrapId(wrapId) {
			this.idStoreMap[wrapId] = {
				itemCallbackKey: 1000
			};
		}

		// 生成唯一的回调函数id

	}, {
		key: "getItemCallbackKey",
		value: function getItemCallbackKey(wrapId) {
			this.idStoreMap[wrapId].itemCallbackKey += 1;
			return this.idStoreMap[wrapId].itemCallbackKey;
		}

		// 存储已经实例化的wrapid

	}, {
		key: "setInstanceId",
		value: function setInstanceId(wrapId) {
			this.instanceIdList.push(wrapId);
		}
	}, {
		key: "isInstanceIdExisted",
		value: function isInstanceIdExisted(wrapId) {
			return this.instanceIdList.indexOf(wrapId) !== -1;
		}
	}]);

	return IdStore;
}();

exports.default = new IdStore();