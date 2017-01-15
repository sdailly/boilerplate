const constant   = require("../config.js");
const gulp       = require("gulp");
const gutil      = require("gulp-util");
const path       = require('path');
const sass       = require('gulp-sass');
const postcss    = require('gulp-postcss');
const cssnano    = require('cssnano');
const processors = [
  require('postcss-import')(),
  require('css-mqpacker')(),
];
constant.env = gutil.env.env;

const cssNanoConfig = {
  minifyFontValues: true
};

module.exports = function() {
	if(constant.env == "production") {
		processors.push(
			cssnano(cssNanoConfig)
		)
	}

  return gulp.src(path.resolve(constant.styles.entry))
		.pipe(sass())
    .pipe(postcss(processors))
    .pipe( gulp.dest(path.resolve(constant.styles.dist)));

};
