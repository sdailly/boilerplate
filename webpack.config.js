var path                = require('path');
var webpack             = require("webpack");
var source        = require('./config');

const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = {
  // This is the "main" file which should include all other modules
  entry: path.resolve(__dirname, source.scripts.entry),
  // Where should the compiled file go?
  output: {
    // To the `dist` folder
    path: path.resolve(__dirname, source.scripts.dist),
    // With the filename `build.js` so it's dist/build.js
    filename: 'bundle.min.js',
    publicPath: path.resolve(__dirname, source.assets.dist)
  },
  module: {
    loaders: [
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        //  it with babel
        loaders: ['babel-loader', 'eslint-loader'],
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/
      },
      {
        test: /\.scss$/,
        loaders: ["style-loader", "css-loader", "sass-loader"]
        // loader: ExtractTextPlugin.extract(
        //   "style",
        //   "css!sass"
        // )
      }
    ],
    noParse: /\.min\.js/
  },
  // sassLoader: {
  //   includePaths: [path.resolve(__dirname, "./src")]
  // },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['','.js','.scss','.sass'],
    alias: {
      'src': path.resolve(__dirname, 'src'),
      'assets': path.resolve(__dirname, 'src/assets'),
      'components': path.resolve(__dirname, 'src/components')
    }
  },
  plugins: [
    new ExtractTextPlugin('bundle.min.css'),
		new webpack.ProvidePlugin({
			// Automtically detect jQuery and $ as free var in modules
			// and inject the jquery library
			// This is required by many jquery plugins
			jQuery: "jquery",
			$: "jquery"
		})
	],
  eslint : {
    configFile : '.eslintrc'
  }
};
