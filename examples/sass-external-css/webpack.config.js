const path    = require('path');
const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const webpackConfig = {
	devtool: 'cheap-eval-source-map',
  	entry: './app/app.js',
  	output: { 
    	path: `${__dirname}/dist`,
    	filename: 'bundle.js' 
  	},
  	module: {
		loaders: [
	  		{ 	
	  			test: /\.js$/, 
	  			loader: 'babel-loader',
	  			exclude: /node_modules/,
	  			query: {
			      presets: ['es2015']
			    }
	  		},
	  		{
				test: /\.scss$/,
				loader: ExtractTextPlugin.extract('style', 'css!sass')
			}
	  	]
	},
	plugins: [
		new ExtractTextPlugin('main.css')
	]
};

module.exports = webpackConfig;