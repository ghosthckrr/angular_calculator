var webpack = require('webpack');
var path = require('path');

module.exports = {
	devtool : 'inline-source-map',
	entry:[
		'./src'
	],
	output:{
		path: path.join(__dirname, 'public'),
		filename: 'bundle.js'
	},
	watch:true,
	resolve: {
		modulesDirectories: ['node_modules','src'],
		extension: ['', '.js','.scss']
	},
	module:{
		loaders:[
			{
				test:/\.js$/,
				exclude:/node_modules/,
				loader: 'babel',
				query:{
					presets:['es2015']
				}
			},
			{
				test:/\.scss$/,
				loaders:[
					'style',
					'css',
					'autoprefixer?browsers=last 3 versions',
					'sass?outputStyle=expanded'
				]
			}
		]
	}
}
