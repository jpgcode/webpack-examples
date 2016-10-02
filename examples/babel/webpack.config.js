const path    = require('path');
const webpack = require('webpack');

const webpackConfig = {
	devtool: 'cheap-eval-source-map',
  	entry: './app.js',
  	output: { 
    	path: `${__dirname}/dist`,
    	filename: 'bundle.js' 
  	},
  	module: {
		loaders: [
	  		{ 	
	  			test: /\.js$/, 
	  			exclude: /node_modules/, 
	  			loader: 'babel-loader' ,
	  			query: {
			      presets: ['es2015']
			    }
	  		}
	  	]
	}
};

module.exports = webpackConfig;