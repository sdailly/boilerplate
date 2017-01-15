var gulp     = require('gulp');
var constant = require("../config.js");

module.exports = function(config) {
  return function() {
    return gulp.src(constant.assets.entry)
      .pipe(gulp.dest(constant.assets.dist))
  }
};
