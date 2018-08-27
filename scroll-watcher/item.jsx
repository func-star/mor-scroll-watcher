import React, { Component } from 'react'
import Ctrl from './ctrl'
import IdStore from './idStore'

export default class ScrollWatcherItem extends Component {
	monaId = this.props.monaId || IdStore.defaultId
	
	componentDidMount () {
		let monaId = this.monaId
		if (!IdStore.isIdExisted(monaId)) {
			IdStore.setWrapId(monaId)
		}
		
		this.offsetTop = this.refs.item.offsetTop
		this.monaWatcher = this.watcher.bind(this)
		
		this.monaWatcher.id = IdStore.getItemCallbackKey(monaId)
		Ctrl.on(monaId, this.monaWatcher)
	}
	
	watcher (info) {
		if (info.type) {
			debugger
			console.log(1)
		}
		if (this.offsetTop - info.scrollTop < (info.wrapHeight - info.bottomEmit)) {
			Ctrl.off(this.monaId, this.monaWatcher)
			this.props.onWatcher && this.props.onWatcher()
		}
	}
	
	render () {
		const {
			className,
			monaId,
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
