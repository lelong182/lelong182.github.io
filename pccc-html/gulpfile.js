"use strict";

var gulp = require('gulp'),
    connect = require('gulp-connect'),
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
        'assets/styles/please-wait.css',
        'assets/styles/minimal-menu.css',
        'assets/styles/font-awesome.min.css',
        'assets/styles/animate.min.css',
        'assets/styles/select2.min.css',
        'assets/masterslider/style/masterslider.css',
        'assets/masterslider/style/ms-staff-style.css',
        'assets/masterslider/style/ms-videogallery.css',
        'assets/masterslider/skins/default/style.css',
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
        'assets/scripts/libs/jquery.min.js',
        'assets/scripts/libs/jquery.easing.1.3.js',
        'assets/scripts/libs/jquery.sticky.js',
        'assets/scripts/libs/bootstrap.min.js',
        'assets/scripts/libs/modernizr.js',
        'assets/scripts/libs/onlynumber.js',
        'assets/scripts/libs/select2.full.min.js',
        'assets/masterslider/masterslider.min.js',
        'assets/scripts/libs/makefixed.min.js',
        'assets/scrollmagic/ScrollMagic.min.js',
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

// Start development server
gulp.task('connectDev', function () {
    connect.server({
        root: './',
        port: 8000,
        livereload: true
    });
});

gulp.task('dev', [
    'css',
    'js',
    'watch',
    // 'images',
    // 'connectDev'
]);

gulp.task('default', [
    'css',
    'js',
    // 'images',
    'watch'
]);
