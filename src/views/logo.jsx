import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import Ctrl from './ctrl'
import { Row, Col } from 'mona'

export default class Logo extends Component {
	list = []
	
	componentWillMount () {
		Ctrl.on('logoChange', index => {
			this.list.push(index)
			this.setState({})
		})
	}
	
	render () {
		return (
			<Row className="logo-box o-a">
				<For each="item" of={this.list} index="index">
					<Col span="12" className="item" key={index}>
						✨✨第 {item + 1} 条数据曝光
					</Col>
				</For>
			</Row>
		)
	}
}
