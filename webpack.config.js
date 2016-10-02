const path    = require('path');
const webpack = require('webpack');

const webpackConfig = {
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
	  		}
	  	]
	}
};

module.exports = webpackConfig;