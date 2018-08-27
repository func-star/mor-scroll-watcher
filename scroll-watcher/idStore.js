/**
 *    created by yangxi on 2018-08-23
 *    单页面提供唯一id
 */

class IdStore {
	defaultId = `mona_scroll_watcher_${Date.now()}`
	
	idStoreMap = {}
	
	// wrapId 是否已经存在
	isIdExisted (wrapId) {
		return !!this.idStoreMap[wrapId]
	}
	
	// 存储 wrapId
	setWrapId (wrapId) {
		this.idStoreMap[wrapId] = {
			itemCallbackKey: 1000
		}
	}
	
	// 生成唯一的回调函数id
	getItemCallbackKey (wrapId) {
		this.idStoreMap[wrapId].itemCallbackKey += 1
		return this.idStoreMap[wrapId].itemCallbackKey
	}
	
	// 存储已经实例化的wrapid
	instanceIdList = []
	
	setInstanceId (wrapId) {
		this.instanceIdList.push(wrapId)
	}
	
	isInstanceIdExisted (wrapId) {
		return this.instanceIdList.indexOf(wrapId) !== -1
	}
}

export default new IdStore
