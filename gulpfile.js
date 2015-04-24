var gulp = require('gulp');
var $ = require('gulp-load-plugins')();

gulp.task('scripts', function () {
  return gulp
    .src('compareTo.js')
    .pipe($.uglify())
    .pipe($.rename({ suffix: '.min' }))
    .pipe(gulp.dest(''));
});

gulp.task('default', ['scripts']);

gulp.task('watch', ['default'], function () {
  gulp.watch('compareTo.js', ['scripts']);
});