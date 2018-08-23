import React, { Component } from 'react'
import Wrap from './wrap'
import Nav from './nav'
import Logo from './logo'

export default class Home extends Component {
	render () {
		return (
			<div className="page-wrapper">
				<Nav />
				<div className="page-wrapper-content block-center d-f">
					<div className="flex-1 h-full" style={{padding: '0 50px'}}>
						<Wrap/>
					</div>
					<div className="flex-1 h-full" style={{padding: '0 50px'}}>
						<Logo/>
					</div>
				</div>
				<a href="https://github.com/func-star/mor-scroll-watcher/issues" target="_blank" className="page-feedback pos-f">
					<i className="iconfont icon-feedback"></i>
				</a>
			</div>
		)
	}
}
