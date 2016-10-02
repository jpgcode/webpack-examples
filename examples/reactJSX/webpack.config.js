const path    = require('path');
const webpack = require('webpack');

const webpackConfig = {
	entry: './app.js',
  	output: { 
	path: `${__dirname}/dist`,
		filename: 'bundle.js' 
  	},
  	module: {
		loaders: [
			{
			    test: /.jsx?$/,
			    loader: 'babel-loader',
			    exclude: /node_modules/,
			    query: {
			      presets: ['es2015', 'react']
			    }
			}
		]
  	}
};


module.exports = webpackConfig;