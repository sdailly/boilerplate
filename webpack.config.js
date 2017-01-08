var webpack = require("webpack");

module.exports = {
  // This is the "main" file which should include all other modules
  entry: './src/index.js',
  // Where should the compiled file go?
  output: {
    // To the `dist` folder
    path: __dirname+'/dist/',
    // With the filename `build.js` so it's dist/build.js
    filename: 'bundle.min.js',
    publicPath: "/assets/"
  },
  module: {
    // Special compilation rules
    loaders: [
      {
        // Ask webpack to check: If this file ends with .js, then apply some transforms
        test: /\.js$/,
        //  it with babel
        loader: 'babel-loader',
        // don't transform node_modules folder (which don't need to be compiled)
        exclude: /node_modules/
      }
    ],
    noParse: /\.min\.js/
  },
  plugins: [
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
  },
  resolve: {
    root: __dirname,
    modulesDirectories: [
      'node_modules'
    ],
    extensions: ['','.js']
  }
};
