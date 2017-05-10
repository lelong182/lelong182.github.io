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
        'assets/fullpage/jquery.fullpage.min.css',
        'assets/materialize/css/materialize.css',
        'assets/fonts/material-iconfont/material-icons.css',
        'assets/gridgallery/css/component.css',
        'assets/text-hover-effects/css/base.css',
        'assets/text-hover-effects/css/css-classes.css',
        'assets/masterslider/style/masterslider.css',
        'assets/masterslider/skins/default/style.css',
        'assets/unitegallery-master/dist/css/unite-gallery.css',
        // 'assets/lightbox/style/ms-lightbox.css',
        'assets/lightbox/css/prettyPhoto.css',
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
        'assets/scripts/libs/jquery.min.js',
        'assets/scripts/libs/modernizr.js',
        'assets/materialize/js/materialize.min.js',
        'assets/fullpage/jquery.fullpage.min.js',
        'assets/gridgallery/js/imagesloaded.pkgd.min.js',
        'assets/gridgallery/js/masonry.pkgd.min.js',
        'assets/gridgallery/js/classie.js',
        'assets/gridgallery/js/cbpGridGallery.js',
        'assets/masterslider/masterslider.min.js',
        'assets/unitegallery-master/dist/js/unitegallery.js',
        'assets/unitegallery-master/dist/themes/tiles/ug-theme-tiles.js',
        // 'assets/scripts/libs/tab.js',
        // 'assets/syntax-highlighter/scripts/shCore.js',
        // 'assets/syntax-highlighter/scripts/shBrushXml.js',
        // 'assets/syntax-highlighter/scripts/shBrushCss.js',
        // 'assets/syntax-highlighter/scripts/shBrushJScript.js',
        // 'assets/scripts/libs/iscroll.js',
        // 'assets/gsap/TweenMax.min.js',
        // 'assets/scripts/libs/bootstrap.min.js',
        // 'assets/scrollmagic/ScrollMagic.min.js',
        // 'assets/scrollmagic/plugins/animation.gsap.min.js',
        // 'assets/gsap/plugins/ScrollToPlugin.min.js',
        // 'assets/scrollmagic/plugins/debug.addIndicators.min.js',
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
    'images',
    'connectDev'
]);

gulp.task('default', [
    'css',
    'js',
    // 'images',
    'watch'
]);
