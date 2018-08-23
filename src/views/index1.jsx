import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Watcher from 'watcher'
import { ListView } from 'mona'
import './index.less'

const WatcherItem = Watcher.item

export default class Home extends Component {
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
	
	onRefresh (done) {
		setTimeout(() => {
			this.getList()
			this.isEnd = this.list.length > 20
			this.setState({})
			done() // call done
		}, 2000)
	}
	
	onInfinite (done) {
		setTimeout(() => {
			this.list = this.list.concat([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
			this.isEnd = this.list.length > 40
			this.setState({})
			done()
		}, 1500)
	}
	
	onWatcher (index) {
		console.log(index)
	}
	
	render () {
		return (
			<div className="wrap" id="views">
				<ListView
					style={{ height: '100%' }}
					onRefresh={this.onRefresh.bind(this)}
					onInfinite={this.onInfinite.bind(this)}
					isEnd={this.isEnd}
					ref="views">
					<For of={this.list} each="item" index="index">
						<WatcherItem
							className="w-full scroller-item"
							key={index}
							style={{
								height: '200px',
								background: 'yellow',
								margin: '20px 0'
							}}
							onWatcher={this.onWatcher.bind(this, index)}
						>
							{item}-{index}
						</WatcherItem>
					</For>
				</ListView>
			</div>
		)
	}
}
