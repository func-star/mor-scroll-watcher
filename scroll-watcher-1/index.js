import Watcher from './watcher'
import Item from './item'
import KeyStore from './keyStore'

const key = KeyStore.getWrapKey()

const defaultOptions = {
	watcherInterval: 200, // 滚动检测时间间隔
	bottomEmit: 0, // 距离底部多少时触发
	watcherId: key,
	initEmit: true // 是否初始化触发一次
}

class ItemNB extends Item {
	watcherId = defaultOptions.watcherId
}

// TODO 目前单个页面仅支持单个监听，待优化

export default class ScrollWatcher {
	static item = ItemNB
	
	static init (options) {
		const { wrap } = options
		if (!wrap) {
			throw new Error('滚动监听的容器不允许为空！')
		}
		
		options = Object.assign(defaultOptions, options)
		this.watcherInstance = new Watcher(options)
	}
}
