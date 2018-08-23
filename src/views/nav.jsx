/***
 * created by yangxi 2018/1/8
 */
import React, { Component } from 'react'
import valuesData from 'data/values'


export default class Nav extends Component {
	componentDidMount () {}
	
	render () {
		return (
			<div className="page-nav flex-center">
				<div className="page-nav-main d-f">
					<div className="page-nav-left flex-center-y">
						<div className="page-nav-logo flex-center-y">
							<img src={valuesData.logo} />{valuesData.title}
						</div>
					</div>
					<div className="page-nav-right flex-right-x flex-1 flex-center-y">
						<a href="https://github.com/func-star/mor-scroll-watcher" target="_blank" className="github">
							<i className="iconfont icon-github"></i>
						</a>
					</div>
				</div>
			</div>
		)
	}
}
