import Item from './item'
import Ctrl from './ctrl'

export default class ScrollWatcher {
	static item = Item
	
	constructor (props) {
		this.options = Object.assign({}, props)
		this.wrapHeight = this.options.wrap.clientHeight
		this._bindEvents()
		if (this.options.initEmit) {
			Ctrl.emit(this.options.watcherId, {
				scrollTop: 0,
				wrapHeight: this.wrapHeight,
				...this.options
			})
		}
	}
	
	// 绑定滚动事件
	_bindEvents () {
		const { wrap } = this.options
		wrap.addEventListener('scroll', this._scroll.bind(this), false)
	}
	
	// 滚动事件
	_scroll (e) {
		if (this.isTiming) {
			return
		}
		this.isTiming = true
		const { watcherInterval } = this.options
		clearTimeout(this.timer)
		this.timer = setTimeout(() => {
			Ctrl.emit(this.options.watcherId, {
				scrollTop: e.target.scrollTop,
				wrapHeight: this.wrapHeight,
				...this.options
			})
			this.isTiming = false
		}, watcherInterval)
	}
}
