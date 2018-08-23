var path = require('path')
var webpack = require('webpack')

module.exports = {
	cache: true,
	entry: {
		app: ['./src/app.jsx']
	},
	output: {
		path: path.resolve(__dirname, './dist'),
		publicPath: '/',
		filename: '[name].js'
	},
	resolve: {
		extensions: ['.js', '.jsx'],
		modules: [
			path.resolve(__dirname, '../node_modules'),
			path.resolve(__dirname, '../src'),
			path.resolve(__dirname, '../src/views'),
		],
		alias: {
			'mona': path.resolve('./node_modules/mor-mobile'),
			'src': path.resolve(__dirname, '../src'),
			'watcher': path.resolve(__dirname, '../scroll-watcher'),
			'react': path.resolve('./node_modules/react'),
			'classnames': path.resolve('./node_modules/classnames'),
			'autoprefixer': path.resolve('./node_modules/autoprefixer'),
			'react-dom': path.resolve('./node_modules/react-dom')
		}
	},
	resolveLoader: {
		modules: ['node_modules']
	},
	plugins: [
		new webpack.ContextReplacementPlugin(/moment[\/\\]locale$/, /zh-cn/)
	],
	module: {
		rules: []
	}
}
