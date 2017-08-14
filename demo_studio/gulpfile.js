"use strict";

var gulp = require('gulp'),
  less = require('gulp-less'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  stripDebug = require('gulp-strip-debug'),
  autoprefixer = require('gulp-autoprefixer'),
  concatCss = require('gulp-concat-css'),
  cleanCss = require('gulp-clean-css'),
  manifest = require('gulp-manifest');


gulp.task('less', function () {
  return gulp.src('./assets/less/styles.less')
    .pipe(less())
    .pipe(gulp.dest('./assets/styles'));
});

gulp.task('css', ['less'], function () {
  gulp.src([
    'assets/styles/styles.css'
  ])
    .pipe(concatCss('main.css'))
    .pipe(autoprefixer())
    .pipe(cleanCss({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/styles'));
});

gulp.task('js', function () {
  gulp.src([
    'assets/scripts/main.js'
  ])
    .pipe(concat('main.js'))
    // .pipe(stripDebug())
    // .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('watch', function () {
  gulp.watch('assets/scripts/**/*.js', ['js']);
  gulp.watch('assets/less/**/*.less', ['css']);
});

gulp.task('manifest', function () {
  gulp.src(['dist/*'], {base: './'})
    .pipe(manifest({
      hash: true,
      preferOnline: true,
      network: ['*'],
      filename: 'manifest',
      exclude: 'manifest'
    }))
    .pipe(gulp.dest('./'));
});

gulp.task('dev', [
  'css',
  'js',
  'watch'
]);

gulp.task('default', [
  'css',
  'js'
]);
