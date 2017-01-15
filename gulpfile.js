var gulp             = require("gulp");
var gutil            = require("gulp-util");
var webpack          = require("webpack");
var WebpackDevServer = require("webpack-dev-server");
var webpackConfig    = require("./webpack.config.js");
var constant         = require("./config.js");

constant.env = gutil.env.env;

// The development server (the recommended option for development)
gulp.task("default", ["webpack-dev-server"]);
// Production build
gulp.task("build", ["webpack:build", "css"]);
gulp.task("build-dev", ["webpack:build-dev"]);
gulp.task("dev", ["webpack:build-dev"], () => {
	gulp.watch(constant.scripts.watch, ["webpack:build-dev"]);
	// gulp.watch(constant.styles.watch, ["css"]);
});
// Build and watch cycle (another option for development)
// Advantage: No server required, can run app from filesystem
// Disadvantage: Requests are not blocked until bundle is available,
//               can serve an old app on refresh
gulp.task("server", ['webpack-dev-server']);

gulp.task('css', require('./tasks/styles.js') );

gulp.task("webpack:build", require('./webpack.prod.js'));
gulp.task("webpack:build-dev", require('./webpack.dev.js'));
gulp.task("webpack-dev-server", require('./webpack.server.js'));
