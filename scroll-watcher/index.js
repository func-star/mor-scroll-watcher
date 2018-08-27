import Item from './item'
import Ctrl from './ctrl'
import IdStore from './idStore'

export default class ScrollWatcher {
	static item = Item
	
	defaultOptions = {
		watcherInterval: 200, // 滚动检测时间间隔
		bottomEmit: 0, // 距离底部多少时触发
		monaId: IdStore.defaultId,
		initEmit: true // 是否初始化触发一次
	}
	
	constructor (props) {
		if (!props.wrap) {
			throw new Error('滚动监听的容器不允许为空！')
		}
		this.options = Object.assign(this.defaultOptions, props)
		
		const { wrap, initEmit, monaId, ...options } = this.options
		if (!IdStore.isIdExisted(monaId)) {
			throw new Error('monaId不存在，请检查属性monaId是否正确！')
		}
		if (IdStore.isInstanceIdExisted(monaId)) {
			throw new Error('monaId已经被实例化，请检查属性monaId是否正确！')
		} else {
			IdStore.setInstanceId(monaId)
		}
		
		this.wrapHeight = wrap.clientHeight
		this._bindEvents()
		if (initEmit) {
			Ctrl.emit(monaId, {
				scrollTop: 0,
				wrapHeight: this.wrapHeight,
				...options
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
			Ctrl.emit(this.options.monaId, {
				scrollTop: e.target.scrollTop,
				wrapHeight: this.wrapHeight,
				...this.options
			})
			this.isTiming = false
		}, watcherInterval)
	}
}
