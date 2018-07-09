'use strict'

const gulp = require('gulp'),
  sass = require('gulp-sass'),
  uglify = require('gulp-uglify'),
  stripDebug = require('gulp-strip-debug'),
  autoprefixer = require('gulp-autoprefixer'),
  concatCss = require('gulp-concat-css'),
  concat = require('gulp-concat'),
  cleanCss = require('gulp-clean-css')

gulp.task('sass', function () {
  return gulp.src('./assets/scss/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('./assets/styles'))
})

gulp.task('css', ['sass'], function () {
  gulp.src([
    'assets/styles/styles.css'
  ])
    .pipe(concatCss('main.css'))
    .pipe(autoprefixer())
    .pipe(cleanCss({
      compatibility: 'ie8'
    }))
    .pipe(gulp.dest('dist/styles'))
})

gulp.task('js', function () {
  gulp.src([
    'assets/scripts/libs/jquery.min.js',
    'assets/scripts/libs/jquery.countdown.min.js',
    'assets/scripts/libs/jquery.time-to.min.js',
    'assets/scripts/main.js'
  ])
    .pipe(concat('main.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('dist/scripts'))
})

gulp.task('copy-fonts', function () {
  return gulp.src(['assets/fonts/**/*'])
    .pipe(gulp.dest('dist/fonts'))
})

gulp.task('watch', function () {
  gulp.watch('assets/scripts/**/*.js', ['js'])
  gulp.watch('assets/scss/**/*.scss', ['css'])
})

gulp.task('dev', [
  'copy-fonts',
  'css',
  'js',
  'watch'
])

gulp.task('default', [
  'copy-fonts',
  'css',
  'js'
])
