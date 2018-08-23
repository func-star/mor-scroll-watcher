import Watcher from './watcher'
import Item from './item'
import Key from './key'

const key = Key.getMonaKey()
const defaultOptions = {
	watcherInterval: 200, // 滚动检测时间间隔
	bottomEmit: 0, // 距离底部多少时触发
	watcherId: key,
	initEmit: true // 是否初始化触发一次
}

class Item2 extends Item {
	watcherId = defaultOptions.watcherId
}

export default class ScrollWatcher {
	static item = Item2
	
	static init (options) {
		const { wrap } = options
		if (!wrap) {
			throw new Error('滚动监听的容器不允许为空！')
		}
		
		options = Object.assign(defaultOptions, options)
		this.watcherInstance = new Watcher(options)
	}
}
