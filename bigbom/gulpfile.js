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
 ===  GENERAL          ====
 =================================== */
gulp.task('less_general', function () {
    return gulp.src('./assets/less/styles_general.less')
        .pipe(less())
        .pipe(gulp.dest('./assets/styles'));
});
gulp.task('css_general', ['less_general'], function () {
    gulp.src([
        'assets/styles/please-wait.css',
        'assets/styles/font-awesome.min.css',
        'assets/styles/animate.min.css',
        'assets/styles/styles_general.css'
    ])
        .pipe(concatCss('general.css'))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('css_common', function () {
    gulp.src([
        'assets/styles/jquery.fancybox.css',
        'assets/styles/fancySelect.css',
        'assets/styles/select2.min.css',
        'assets/styles/jquery.mCustomScrollbar.min.css',
        'assets/styles/perfect-scrollbar.min.css',
        'assets/styles/slick.css',
        'assets/styles/slick-theme.css',
        'assets/styles/introjs.min.css'
    ])
        .pipe(concatCss('common.css'))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('js_general', function () {
    gulp.src([
        'assets/scripts/libs/please-wait.min.js',
        'assets/scripts/libs/jquery.min.js',
        'assets/scripts/libs/jquery-ui.min.js',
        'assets/scripts/libs/jquery.easing.1.3.js',
        'assets/scripts/libs/bootstrap.min.js',
        'assets/scripts/libs/js.cookie.js'
    ])
        .pipe(concat('general.js'))
        // .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('js_common', function () {
    gulp.src([
        'assets/scripts/libs/moment-with-locales.min.js',
        'assets/scripts/libs/datepicker-vi.js',
        'assets/scripts/libs/jquery.comiseo.daterangepicker.js',
        'assets/scripts/libs/jquery.fancybox.pack.js',
        'assets/scripts/libs/jquery.ui.touch-punch.min.js',
        'assets/scripts/libs/jquery.sticky.js',
        'assets/scripts/libs/onlynumber.js',
        'assets/scripts/libs/fancySelect.js',
        'assets/scripts/libs/select2.full.min.js',
        'assets/scripts/libs/select2-vi.js',
        'assets/scripts/libs/jquery.mCustomScrollbar.concat.min.js',
        'assets/scripts/libs/perfect-scrollbar.jquery.min.js',
        'assets/scripts/libs/slick.min.js',
        'assets/scripts/libs/intro.min.js',
        'assets/scripts/libs/clipboard.min.js',
        'assets/scrollmagic/ScrollMagic.min.js',
        'assets/scripts/libs/jquery.marquee.min.js',
        'assets/scripts/libs/jquery.masked-input.js',
        'assets/scripts/libs/jquery.noty.packaged.min.js',
        'assets/scripts/functions.js'
    ])
        .pipe(concat('common.js'))
        // .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
});


/* =================================
 ===  ACCOUNTS          ====
 =================================== */
gulp.task('less_accounts', function () {
    return gulp.src('./assets/less/styles_accounts.less')
        .pipe(less())
        .pipe(gulp.dest('./assets/styles'));
});

gulp.task('css_accounts', ['less_accounts'], function () {
    gulp.src([
        'assets/styles/styles_accounts.css'
    ])
        .pipe(concatCss('accounts.css'))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('js_accounts', function () {
    gulp.src([
        'assets/scripts/accounts.js'
    ])
        .pipe(concat('accounts.js'))
        // .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('watch_accounts', function () {
    gulp.watch('assets/less/**/*.less', ['css_accounts']);
    gulp.watch('assets/styles/**/*.css', ['css_general', 'css_common']);
    gulp.watch('assets/scripts/**/*.js', ['js_common', 'js_accounts']);
});


/* =================================
 ===  MAIN APP          ====
 =================================== */
gulp.task('less_main', function () {
    return gulp.src('./assets/less/styles_main.less')
        .pipe(less())
        .pipe(gulp.dest('./assets/styles'));
});

gulp.task('css_main', ['less_main'], function () {
    gulp.src([
        'assets/styles/minimal-menu.css',
        'assets/styles/styles_main.css'
    ])
        .pipe(concatCss('main.css'))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('js_main', function () {
    gulp.src([
        'assets/scripts/libs/velocity.min.js',
        'assets/gsap/TweenMax.min.js',
        'assets/scripts/libs/schedule.js',
        'assets/scripts/libs/inputTags.jquery.min.js',
        'assets/scripts/libs/jquery.mask.min.js',
        'assets/amcharts/amcharts.js',
        'assets/amcharts/serial.js',
        'assets/amcharts/pie.js',
        'assets/amcharts/xy.js',
        'assets/amcharts/lang/vi.js',
        'assets/amcharts/plugins/responsive/responsive.min.js',
        'assets/scripts/libs/table-color.min.js',
        'assets/scripts/main.js'
    ])
        .pipe(concat('main.js'))
        // .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('watch_main', function () {
    gulp.watch('assets/less/**/*.less', ['css_main']);
    gulp.watch('assets/styles/**/*.css', ['css_general', 'css_common']);
    gulp.watch('assets/scripts/**/*.js', ['js_common', 'js_main']);
});


/* =================================
 ===  AUTH          ====
 =================================== */
gulp.task('less_auth', function () {
    return gulp.src('./assets/less/styles_auth.less')
        .pipe(less())
        .pipe(gulp.dest('./assets/styles'));
});

gulp.task('css_auth', ['less_auth'], function () {
    gulp.src([
        'assets/styles/styles_auth.css'
    ])
        .pipe(concatCss('auth.css'))
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/styles'));
});

gulp.task('js_auth', function () {
    gulp.src([
        'assets/scripts/auth.js'
    ])
        .pipe(concat('auth.js'))
        // .pipe(stripDebug())
        .pipe(uglify())
        .pipe(gulp.dest('dist/scripts'));
});

gulp.task('watch_auth', function () {
    gulp.watch('assets/less/**/*.less', ['css_auth']);
    gulp.watch('assets/styles/**/*.css', ['css_general']);
    gulp.watch('assets/scripts/**/*.js', ['js_auth']);
});


/* =================================
 ===  Images Optimizer          ====
 =================================== */
gulp.task('images', function () {
    gulp.src('assets/images/**/*')
        .pipe(imagemin())
        .pipe(gulp.dest('dist/images'))
});


/* =================================
 ===  ALL CSS          ====
 =================================== */
gulp.task('all_less', function () {
    return gulp.src([
        './assets/less/styles_auth.less',
        './assets/less/styles_accounts.less',
        './assets/less/styles_main.less'
    ])
        .pipe(concat('all.less'))
        .pipe(less())
        .pipe(gulp.dest('./assets/styles'));
});

gulp.task('all_css', ['all_less'], function () {
    gulp.src([
        'assets/styles/all.css'
    ])
        .pipe(autoprefixer({browsers: ['last 2 versions']}))
        .pipe(cleanCSS({compatibility: 'ie8'}))
        .pipe(gulp.dest('dist/styles'));
});


/* =================================
 ===  Build Command          ====
 =================================== */
gulp.task('accounts_dev', [
    'css_accounts',
    'js_accounts',
    'watch_accounts'
]);

gulp.task('accounts', [
    'css_general',
    'css_common',
    'css_accounts',
    'js_general',
    'js_common',
    'js_accounts',
    // 'images'
]);

gulp.task('main_dev', [
    'css_main',
    'js_main',
    'watch_main'
]);

gulp.task('main', [
    'css_general',
    'css_common',
    'css_main',
    'js_general',
    'js_common',
    'js_main',
    // 'images'
]);

gulp.task('auth_dev', [
    'css_auth',
    'js_auth',
    'watch_auth'
]);

gulp.task('auth', [
    'css_general',
    'css_auth',
    'js_general',
    'js_auth',
    // 'images'
]);

gulp.task('all_js', [
    'js_general',
    'js_common',
    'js_accounts',
    'js_main',
    'js_auth'
]);