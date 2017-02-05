var gulp = require('gulp');
var sass = require('gulp-sass');
var concat = require('gulp-concat');

gulp.task('sass', function () {
  gulp.src('../src/assets/scss/main.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../built/css'));
});

gulp.task('sasscan', function () {
  gulp.src('../src/assets/bower_components/foundation-sites/assets/foundation_canvas.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('../built/css'));
});

gulp.task('sass:watch', function () {
  gulp.watch('../src/assets/scss/*.scss', ['sass']);
});

gulp.task('scripts', function() {
  return gulp.src(['../src/assets/bower_components/foundation-sites/js/foundation.core.js', '../src/assets/bower_components/foundation-sites/js/foundation.offcanvas.js', '../src/assets/bower_components/foundation-sites/js/foundation.util.mediaQuery.js', '../src/assets/bower_components/foundation-sites/js/foundation.util.triggers.js', '../src/assets/bower_components/foundation-sites/js/foundation.util.motion.js'])
    .pipe(concat('offcanvas.js'))
    .pipe(gulp.dest('../built/js'));
});