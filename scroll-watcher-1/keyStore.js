/**
 *    created by yangxi on 2018-08-23
 *    单页面提供唯一key
 */

class KeyStore {
	keyStoreList = {}
	nameSpace = 'mona_scroll_watcher'
	
	wrapId = 1000
	
	getWrapKey () {
		this.wrapId += 1
		const wrapKey = `${this.nameSpace}_${this.wrapId}`
		this.keyStoreList[wrapKey] = {
			itemKey: 1000
		}
		return wrapKey
	}
	
	getItemKey (wrapKey) {
		this.keyStoreList[wrapKey].itemKey += 1
		return this.keyStoreList[wrapKey].itemKey
	}
}

export default new KeyStore
