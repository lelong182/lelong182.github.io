var gulp = require('gulp'),
    less = require('gulp-less'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    stripDebug = require('gulp-strip-debug'),
    autoprefixer = require('gulp-autoprefixer'),
    concatCss = require('gulp-concat-css'),
    cleanCSS = require('gulp-clean-css'),
    imagemin = require('gulp-imagemin');


/* =================================
 ===  MAIN APP          ====
 =================================== */
gulp.task('less_main', function () {
    return gulp.src('./assets/less/styles.less')
        .pipe(less())
        .pipe(gulp.dest('./assets/styles'));
});

gulp.task('css_main', ['less_main'], function () {
    return gulp.src([
        'assets/styles/font-awesome.min.css',
        'assets/styles/flat-form.css',
        'assets/pe-icon-7-stroke/css/pe-icon-7-stroke.css',
        'assets/pe-icon-7-stroke/css/helper.css',
        'assets/styles/minimal-menu.css',
        'assets/styles/flat-form.css',
        'assets/styles/fancySelect.css',
        'assets/styles/jquery.fancybox.css',
        'assets/styles/allinone_bannerRotator.css',
        'assets/styles/responsive-accordion.css',
        'assets/styles/owl.carousel.css',
        'assets/styles/owl.theme.default.min.css',
        'assets/styles/styles.css'
    ])
        .pipe(concatCss('main.css'))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('js_main', function () {
    return gulp.src([
        'assets/scripts/libs/jquery-1.11.2.min.js',
        'assets/scripts/libs/jquery-ui-1.11.4/jquery-ui.min.js',
        'assets/scripts/libs/jquery.easing.1.3.js',
        'assets/scripts/libs/bootstrap.min.js',
        'assets/scripts/libs/fancySelect.js',
        'assets/scripts/libs/jquery.fancybox.pack.js',
        'assets/scripts/libs/jquery.ui.touch-punch.min.js',
        'assets/scripts/libs/jquery.mousewheel.min.js',
        'assets/scripts/libs/owl.carousel.min.js',
        'assets/scripts/libs/jquery.countdown.min.js',
        'assets/scripts/libs/jquery.waypoints.min.js',
        'assets/scripts/libs/jquery-asPieProgress.js',
        'assets/scripts/libs/jquery.mixitup.min.js',
        'assets/scripts/libs/easyResponsiveTabs.js',
        'assets/scripts/libs/jquery.raty-fa.js',
        'assets/scripts/libs/salvattore.min.js',
        'assets/scripts/libs/responsive-accordion.min.js',
        'assets/scripts/libs/allinone_bannerRotator.js',
        'assets/scripts/functions.js'
    ])
        .pipe(concat('main.js'))
        .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('watch_main', function () {
    gulp.watch('assets/less/**/*.less', ['css_main']);
    gulp.watch('assets/scripts/**/*.js', ['js_main']);
});


/* =================================
 ===  Copy HTML          ====
 =================================== */
gulp.task('copy_built', function() {
    gulp.src('./html/dist/*.html')
        .pipe(gulp.dest('./'));
});

gulp.task('copy_default', function() {
    gulp.src('./html/app/*.html')
        .pipe(gulp.dest('./'));
});


/* =================================
 ===  Images Optimizer          ====
 =================================== */
gulp.task('images', function () {
    return gulp.src('assets/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});


/* =================================
 ===  Build Command          ====
 =================================== */
gulp.task('dev', [
    'css_main',
    'js_main',
    'copy_default',
    'watch_main'
]);

gulp.task('default', [
    'css_main',
    'js_main',
    'copy_built',
    'images'
]);