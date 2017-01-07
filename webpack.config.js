var webpack = require("webpack");

module.exports = {
  // This is the "main" file which should include all other modules
  entry: './src/index.js',
  // Where should the compiled file go?
  output: {
    // To the `dist` folder
    path: '/dist',
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
    ]
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
        compress: {
            warnings: false,
        },
        output: {
            comments: false,
        },
    }),
		new webpack.ProvidePlugin({
			// Automtically detect jQuery and $ as free var in modules
			// and inject the jquery library
			// This is required by many jquery plugins
			jQuery: "jquery",
			$: "jquery"
		})
	]
}
