var webpack = require('webpack');
var path = require('path');                // a useful node path helper library

var config = {
  entry: [
    'webpack/hot/dev-server',
    'webpack-dev-server/client?http://localhost:8080',
    './app/main.js'
  ],  
  resolve: {
  	root: [
  		path.resolve(__dirname,'./app')
  	],
  	extensions: ['','.js','.jsx']
  },
  output: {
    path: path.resolve(__dirname, 'build'), // store the bundled output in dist/bundle.js
    filename: 'bundle.js'                  // specifying file name for our compiled assets
  },
  module: {
    loaders: [
      // telling webpack which loaders we want to use.  For now just run the
      // code through the babel-loader.  'babel' is an alias for babel-loader
      { test: /\.js$/, 
      	loaders: ['babel'], 
      	exclude: /node_modules/
	  }
    ]
  }
}

module.exports = config;