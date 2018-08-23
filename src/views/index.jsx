import React, { Component } from 'react'
import Watcher from 'watcher'
import './index.less'

const WatcherItem = Watcher.item

export default class Home extends Component {
	componentDidMount () {
		Watcher.init({
			wrap: this.refs.views,
			// bottomEmit: 100,
			// initEmit: true
		})
	}
	
	onWatcher (index) {
		console.log(index)
	}
	
	render () {
		const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
		return (
			<div className="wrap" ref="views" id="views">
				<For of={list} each="item" index="index">
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
						{item}
					</WatcherItem>
				</For>
			</div>
		)
	}
}
