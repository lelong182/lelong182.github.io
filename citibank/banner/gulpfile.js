// include gulp
var gulp = require("gulp");

// include plug-ins
var uglify = require("gulp-uglify"),
    stripDebug = require("gulp-strip-debug"),
    concat = require("gulp-concat"),
    concatCss = require("gulp-concat-css"),
    minifyCss = require("gulp-minify-css"),
    autoprefix = require("gulp-autoprefixer"),
    imagemin = require('gulp-imagemin');

// JS concat, strip debugging and minify
gulp.task('js', function() {
    gulp.src([
        'assets/js/libs/cash.min.js',
        'assets/js/libs/plugins/CSSPlugin.min.js',
        'assets/js/libs/easing/EasePack.min.js',
        'assets/js/libs/TweenLite.min.js',
        'assets/js/libs/TimelineMax.min.js',
        'assets/js/160x600.js'
    ])
        .pipe(concat('scripts.js'))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('160x600/js/'));
});

// CSS concat, autoprefix, minify
gulp.task('css', function() {
    gulp.src([
        'assets/css/160x600.css'
    ])
        .pipe(concatCss('styles.css'))
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('160x600/css/'));
});

//Images compression
gulp.task('img', function() {
    gulp.src('160x600/origin_images/*')
        .pipe(imagemin({
            progressive: true
        }))
        .pipe(gulp.dest('160x600/images'));
});

// watch for JS/CSS changes
gulp.task('watch', function() {
    gulp.watch('assets/js/**/*.js', ['js']);
    gulp.watch('assets/css/**/*.css', ['css']);
});

// default gulp task
gulp.task('default', [
    'js',
    'css',
    'img',
    'watch'
]);