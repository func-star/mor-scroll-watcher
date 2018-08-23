import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Watcher from 'watcher'
import Ctrl from './ctrl'
import { ListView } from 'mona'

const WatcherItem = Watcher.item

export default class Wrap extends Component {
	componentWillMount () {
		this.getList()
		
	}
	
	componentDidMount () {
		Watcher.init({
			wrap: findDOMNode(this.refs.views)
			// bottomEmit: 100,
			// initEmit: true
		})
	}
	
	list = []
	
	getList () {
		this.list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
	}
	
	onInfinite (done) {
		setTimeout(() => {
			this.list = this.list.concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
			this.isEnd = this.list.length > 19
			this.setState({})
			done()
		}, 1500)
	}
	
	onWatcher (index) {
		Ctrl.emit('logoChange', index)
	}
	
	render () {
		return (
			<div className="wrap o-a full">
				<ListView
					style={{ height: '100%' }}
					enableRefresh={false}
					onInfinite={this.onInfinite.bind(this)}
					isEnd={this.isEnd}
					ref="views">
					<For of={this.list} each="item" index="index">
						<WatcherItem className="w-full scroller-item pos-r" key={index} onWatcher={this.onWatcher.bind(this, index)}
						>
							<img src="http://static.monajs.cn/example/beauty.jpg" className="w-full" style={{ marginBottom: '20px', minHeight: '180px' }} />
							<div className="tag pos-a flex-center">{index + 1}</div>
						</WatcherItem>
					</For>
					<If condition={this.isEnd}>
						<div className="flex-center">没有更多了~</div>
					</If>
				</ListView>
			</div>
		)
	}
}
