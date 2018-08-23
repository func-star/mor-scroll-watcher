/**
 *    created by yangxi on 2018-08-23
 *    单页面提供唯一key
 */

class Key {
	keyList = []
	nameSpace = 'mona_scroll_watcher_key'
	
	start = 1000
	
	getMonaKey () {
		this.start += 1
		const key = `${this.nameSpace}_${this.start}`
		this.keyList.push(key)
		return key
	}
}

export default new Key
