// include gulp
var gulp = require("gulp");

// include plug-ins
var uglify = require("gulp-uglify"),
    stripDebug = require("gulp-strip-debug"),
    concat = require("gulp-concat"),
    concatCss = require("gulp-concat-css"),
    minifyCss = require("gulp-minify-css"),
    autoprefix = require("gulp-autoprefixer");

// JS concat, strip debugging and minify
gulp.task('js', function() {
    gulp.src([
        'assets/js/libs/jquery-1.11.3.min.js',
        'assets/js/libs/TweenMax.min.js',
        'assets/js/728x90.js'
    ])
        .pipe(concat('scripts.js'))
    .pipe(stripDebug())
    .pipe(uglify())
    .pipe(gulp.dest('728x90/js/'));
});

// CSS concat, autoprefix, minify
gulp.task('css', function() {
    gulp.src([
        'assets/css/animate.min.css',
        'assets/css/728x90.css'
    ])
        .pipe(concatCss('styles.css'))
        .pipe(autoprefix('last 2 versions'))
        .pipe(minifyCss({
            compatibility: 'ie8'
        }))
        .pipe(gulp.dest('728x90/css/'));
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
    'watch'
]);