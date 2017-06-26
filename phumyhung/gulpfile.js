"use strict";

var gulp = require('gulp'),
  less = require('gulp-less'),
  concat = require('gulp-concat'),
  uglify = require('gulp-uglify'),
  stripDebug = require('gulp-strip-debug'),
  autoprefixer = require('gulp-autoprefixer'),
  concatCss = require('gulp-concat-css'),
  cleanCss = require('gulp-clean-css'),
  changed = require('gulp-changed'),
  imagemin = require('gulp-imagemin');


gulp.task('less', function () {
  return gulp.src('./assets/less/styles.less')
    .pipe(less())
    .pipe(gulp.dest('./assets/styles'));
});

gulp.task('css', ['less'], function () {
  gulp.src([
    'assets/styles/please-wait.css',
    'assets/styles/font-awesome.min.css',
    'assets/styles/animate.min.css',
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
    'assets/scripts/libs/please-wait.min.js',
    'assets/scripts/libs/bootstrap.min.js',
    'assets/scripts/libs/modernizr.js',
    'assets/scripts/main.js'
  ])
    .pipe(concat('main.js'))
    // .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'));
});

gulp.task('images', function () {
  var imgDst = 'dist/images';
  gulp.src('assets/images/**/*')
    .pipe(changed(imgDst))
    .pipe(imagemin())
    .pipe(gulp.dest(imgDst));
});

gulp.task('watch', function () {
  gulp.watch('assets/scripts/**/*.js', ['js']);
  gulp.watch('assets/less/**/*.less', ['css']);
});

gulp.task('dev', [
  'css',
  'js',
  'watch'
]);

gulp.task('default', [
  'css',
  'js',
  'images'
]);
