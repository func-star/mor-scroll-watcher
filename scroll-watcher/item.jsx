import React, { Component } from 'react'
import Ctrl from './ctrl'

export default class ScrollWatcherItem extends Component {
	domInfo = {} // 节点位置信息
	
	componentDidMount () {
		this.domInfo = this.refs.item.getBoundingClientRect()
		Ctrl.on(this.watcherId, this.watcher.bind(this))
	}
	
	isEmited = false
	
	watcher (info) {
		if (this.isEmited) {
			return
		}
		if (this.domInfo.top - info.scrollTop < (info.wrapHeight - info.bottomEmit)) {
			this.isEmited = true
			this.props.onWatcher && this.props.onWatcher()
		}
	}
	
	render () {
		const {
			className,
			onWatcher,
			children,
			...props
		} = this.props
		
		let klass = 'mona-scroll-watcher'
		if (className) {
			klass = klass + ' ' + className
		}
		return (
			<div className={klass} {...props} ref="item">
				{children}
			</div>
		)
	}
}
