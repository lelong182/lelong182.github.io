"use strict";

var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    stripDebug = require('gulp-strip-debug'),
    autoprefixer = require('gulp-autoprefixer'),
    concatCss = require('gulp-concat-css'),
    cleanCss = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin');


gulp.task('less', function () {
    return gulp.src('./assets/less/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./assets/styles'));
});

gulp.task('css', ['less'], function () {
    gulp.src([
        // 'assets/styles/please-wait.css',
        'assets/styles/minimal-menu.css',
        'assets/styles/font-awesome.min.css',
        'assets/styles/animate.min.css',
        'assets/styles/slick.css',
        'assets/styles/slick-theme.css',
        'assets/styles/sweetalert2.min.css',
        'assets/styles/perfect-scrollbar.min.css',
        'assets/styles/select2.min.css',
        'assets/styles/bootstrap-datepicker3.min.css',
        'assets/styles/bootstrap-timepicker.min.css',
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
        // 'assets/scripts/libs/please-wait.min.js',
        'assets/scripts/libs/jquery.min.js',
        'assets/scripts/libs/jquery.easing.1.3.js',
        'assets/scripts/libs/bootstrap.min.js',
        'assets/scripts/libs/modernizr.js',
        'assets/scripts/libs/slick.min.js',
        'assets/scripts/libs/sweetalert2.min.js',
        'assets/scripts/libs/perfect-scrollbar.jquery.min.js',
        'assets/scripts/libs/select2.full.min.js',
        'assets/scripts/libs/bootstrap-datepicker.min.js',
        'assets/scripts/libs/bootstrap-datepicker.vi.min.js',
        'assets/scripts/libs/bootstrap-timepicker.min.js',
        'assets/scripts/main.js'
    ])
        .pipe(concat('main.js'))
        // .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('images', function () {
    gulp.src('assets/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'));
});

gulp.task('watch', function () {
    gulp.watch('assets/scripts/**/*.js', ['js']);
    gulp.watch('assets/less/**/*.less', ['css']);
});

gulp.task('dev', [
    'css',
    'js',
    // 'watch'
]);

gulp.task('default', [
    'css',
    'js',
    'images'
]);
