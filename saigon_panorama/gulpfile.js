"use strict";

var gulp = require('gulp'),
  less = require('gulp-less'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  pump = require('pump'),
  stripDebug = require('gulp-strip-debug'),
  autoprefixer = require('gulp-autoprefixer'),
  // concatCss = require('gulp-concat-css'),
  cleanCss = require('gulp-clean-css'),
  rename = require('gulp-rename'),
  replace = require('gulp-replace');

gulp.task('zepto', function () {
  pump([
    gulp.src([
      'assets/js/libs/zepto/zepto.js',
      'assets/js/libs/zepto/event.js',
      'assets/js/libs/zepto/fx.js',
      'assets/js/libs/zepto/fx_method.js'
    ]),
    concat('zepto-opt.min.js'),
    stripDebug(),
    uglify(),
    gulp.dest('dist/libs/js')
  ]);
});

gulp.task('less-300x600', function () {
  return gulp.src('./assets/less/300x600.less')
    .pipe(less())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./dist/300x600/css'));
});

gulp.task('less-480x270', function () {
  return gulp.src('./assets/less/480x270.less')
    .pipe(less())
    .pipe(rename('styles.css'))
    .pipe(gulp.dest('./dist/480x270/css'));
});

gulp.task('css-300x600', ['less-300x600'], function () {
  gulp.src([
    'dist/300x600/css/styles.css'
  ])
    .pipe(autoprefixer())
    .pipe(cleanCss({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/300x600/css'));
});

gulp.task('css-480x270', ['less-480x270'], function () {
  gulp.src([
    'dist/480x270/css/styles.css'
  ])
    .pipe(autoprefixer())
    .pipe(cleanCss({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/480x270/css'));
});

gulp.task('js-300x600', function () {
  pump([
    gulp.src([
      'assets/js/functions.js',
      'assets/js/300x600.js'
    ]),
    concat('scripts.js'),
    stripDebug(),
    uglify(),
    gulp.dest('dist/300x600/js')
  ]);
});

gulp.task('js-480x270', function () {
  pump([
    gulp.src([
      'assets/js/functions.js',
      'assets/js/480x270.js'
    ]),
    concat('scripts.js'),
    stripDebug(),
    uglify(),
    gulp.dest('dist/480x270/js')
  ]);
});

gulp.task('watch-300x600', function () {
  gulp.watch('assets/js/**/*.js', ['js-300x600']);
  gulp.watch('assets/less/**/*.less', ['css-300x600']);
});

gulp.task('watch-480x270', function () {
  gulp.watch('assets/js/**/*.js', ['js-480x270']);
  gulp.watch('assets/less/**/*.less', ['css-480x270']);
});

gulp.task('300x600', [
  'css-300x600',
  'js-300x600'
], function () {
  gulp.src('./300x600.html')
    .pipe(replace('"dist/300x600', '".'))
    .pipe(replace('"dist/libs', '"//lelong182.github.io/libs'))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./dist/300x600'));
});

gulp.task('dev-300x600', [
  'css-300x600',
  'js-300x600',
  'watch-300x600'
]);

gulp.task('480x270', [
  'css-480x270',
  'js-480x270'
], function () {
  gulp.src('./480x270.html')
    .pipe(replace('"dist/480x270', '".'))
    .pipe(replace('"dist/libs', '"//lelong182.github.io/libs'))
    .pipe(rename('index.html'))
    .pipe(gulp.dest('./dist/480x270'));
});

gulp.task('dev-480x270', [
  'css-480x270',
  'js-480x270',
  'watch-480x270'
]);

gulp.task('default', [
  '300x600',
  '480x270'
]);