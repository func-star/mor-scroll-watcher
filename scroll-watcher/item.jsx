import React, { Component } from 'react'
import Ctrl from './ctrl'
import KeyStore from './keyStore'

export default class ScrollWatcherItem extends Component {
	componentDidMount () {
		this.offsetTop = this.refs.item.offsetTop
		this.monaWatcher = this.watcher.bind(this)
		this.monaWatcher.id = KeyStore.getItemKey(this.watcherId)
		Ctrl.on(this.watcherId, this.monaWatcher)
	}
	
	watcher (info) {
		if (this.offsetTop - info.scrollTop < (info.wrapHeight - info.bottomEmit)) {
			Ctrl.off(this.watcherId, this.monaWatcher)
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
