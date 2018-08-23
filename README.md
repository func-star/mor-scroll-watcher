# Mona系列 - React滚动监听组件

✨✨ 这是一款非常有用轻巧的 React 组件，你可以应用到任何需要滚动监听的场景

## 使用场景

- 滚动曝光埋点
- 图片懒加载
- 视图区域按需加载
...


## 依赖

- [mona-events](https://www.npmjs.com/package/mona-events)

## 使用指南
```jsx
import Watcher from 'mor-scroll-watcher'
const WatcherItem = Watcher.item

Watcher.init(options)
<WatcherItem ...>
	...
</WatcherItem>
```

> 你只需要将需要被滚动触发的节点设置为`WatcherItem`节点的`children`，就能达到滚动触发的目的。


## 代码演示
```
import React, { Component } from 'react'
import Watcher from 'mor-scroll-watcher'

const WatcherItem = Watcher.item

export default class Home extends Component {
	componentDidMount () {
		Watcher.init({
			wrap: findDOMNode(this.refs.views)
			// bottomEmit: 100,
			// initEmit: true
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

## options

| 参数 | 说明 | 类型 | 默认值 | 是否必传 |
| --- | --- | --- | --- | :-- |
| wrap | 滚动容器 | `DOM原生节点` | - | `yes` |
| bottomEmit | 滚动距离底部的触发距离 | `Number` | - | `no` |
| initEmit | 初始化是否需要触发一次 | `Boolean` | `true` | `no` |

# WatcherItem

| 参数 | 说明 | 类型 | 默认值 | 可选项 |
| --- | --- | --- | --- | :-- |
| onWatcher | 触发之后的回调 | `Function` | - | - |
| className | className属性 | `String` | - | - |
