# Mona系列 - React滚动监听组件

✨✨ 这是一款非常有用轻巧的 React 组件，你可以应用到任何需要滚动监听的场景

[![npm](https://img.shields.io/npm/v/mor-scroll-watcher.svg?style=flat-square)](https://www.npmjs.com/package/mor-scroll-watcher) [![npm](https://img.shields.io/npm/dt/mor-scroll-watcher.svg?style=flat-square)](https://www.npmjs.com/package/mor-scroll-watcher)

[demo页面](https://func-star.github.io/mor-scroll-watcher/)

## 使用场景

- 滚动曝光埋点
- 图片懒加载
- 视图区域按需加载

...


## 依赖

- [mona-events](https://www.npmjs.com/package/mona-events)


## 使用指南
```js
import Watcher from 'mor-scroll-watcher'
const WatcherItem = Watcher.item

Watcher.init(options)
<WatcherItem ...>
	...
</WatcherItem>
```

> 你只需要将需要被滚动触发的节点设置为`WatcherItem`节点的`children`，就能达到滚动触发的目的。


## 代码演示
```js
import React, { Component } from 'react'
import Watcher from 'mor-scroll-watcher'

const WatcherItem = Watcher.item

export default class Home extends Component {
	componentDidMount () {
		new Watcher({
			wrap: findDOMNode(this.refs.views)
			// bottomEmit: 100,
			// initEmit: false
		})
	}

	onWatcher (index) {
		// do something
		console.log(index)
	}

	render () {
		const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
		return (
			<div className="wrap" ref="views">
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

```

## 高阶用法

当页面内存在多个需要被监听滚动的容器时，需要设置唯一ID

```js
import React, { Component } from 'react'
import Watcher from 'mor-scroll-watcher'

const WatcherItem = Watcher.item

export default class Home extends Component {
	componentDidMount () {
		new Watcher({
			wrap: findDOMNode(this.refs.views)
			monaId: 'weiyiID_123456'
			// bottomEmit: 100,
			// initEmit: false
		})
	}

	onWatcher (index) {
		// do something
		console.log(index)
	}

	render () {
		const list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]
		return (
			<div className="wrap" ref="views">
				<For of={list} each="item" index="index">
					<WatcherItem
						monaId: 'weiyiID_123456'
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

```

## options

| 参数 | 说明 | 类型 | 默认值 | 是否必传 |
| --- | --- | --- | --- | :-- |
| wrap | 滚动容器 | `DOM原生节点` | - | `yes` |
| monaId | 当页面内存在多个需要监听的容器时，需要设置唯一的id，并与被监听的`WatcherItem`的属性`monaId`保持统一 | `String` | - | - |
| bottomEmit | 滚动距离底部的触发距离 | `Number` | `0` | `no` |
| initEmit | 初始化是否需要触发一次 | `Boolean` | `true` | `no` |

## WatcherItem

| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| onWatcher | 触发之后的回调 | `Function` | - | - |
| monaId | 当页面内存在多个需要监听的容器时，需要设置唯一的id，并与初始化的实例的属性`monaId`保持统一 | `String` | - | - |
| className | className属性 | `String` | - | - |


## 联系我

> 微信：599321378
