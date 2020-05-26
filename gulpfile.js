'use strict';

const gulp = require('gulp');
const sass = require('gulp-sass');
const sourcemaps = require('gulp-sourcemaps');
const server = require('gulp-server-livereload');
const imagemin = require('gulp-imagemin');
const minify = require('gulp-minify');
const concat = require('gulp-concat');
const autoprefixer = require('gulp-autoprefixer');
const rename = require("gulp-rename");
// const postcss = require('gulp-postcss');

sass.compiler = require('node-sass');

const html = () => {
    return gulp.src('./src/**/*.{html,ico}')
        .pipe(gulp.dest('./dist'));
};

const js = () => {
    return gulp.src('./src/js/**/*.js')
        .pipe(concat('script.js'))
        .pipe(minify({
            ext: { min: '.min.js' }
        }))
        .pipe(gulp.dest('./dist/js'));
}

const styles = () => {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'expanded' }).on('error', sass.logError))
        .pipe(autoprefixer({ cascade: true }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./dist/css'));
};

const mincss = () => {
    return gulp.src('./src/scss/**/*.scss')
        .pipe(rename({ suffix: ".min" }))
        .pipe(sourcemaps.init())
        .pipe(sass({ outputStyle: 'compressed' }).on('error', sass.logError))
        .pipe(autoprefixer({ cascade: true }))
        .pipe(sourcemaps.write("./"))
        .pipe(gulp.dest('./dist/css'));
};

const images = () => {
    return gulp.src('./src/images/**/*.{jpg,png}')
        .pipe(imagemin({ progressive: true }))
        .pipe(gulp.dest('./dist/images'))
};

const fonts = () => {
    return gulp.src('./src/fonts/**/*.*')
        .pipe(gulp.dest('./dist/fonts'))
};

gulp.task('html', function () {
    gulp.watch('./src/**/*.html', html);
});

gulp.task('js', function () {
    gulp.watch('./src/js/**/*.js', js);
});

gulp.task('styles', function () {
    gulp.watch('./src/scss/**/*.scss', styles);
});

gulp.task('mincss', function () {
    gulp.watch('./src/scss/**/*.scss', mincss);
});

gulp.task('webserver', function () {
    gulp.src('./dist')
        .pipe(server({
            livereload: true,
            defaultFile: 'index.html',
            directoryListing: false,
            open: true
        }));
});

gulp.task('default', gulp.parallel('html', 'js', 'styles', 'mincss', 'webserver'));
gulp.task('build', function (done) {
    html();
    js();
    styles();
    mincss();
    images();
    fonts();
    done();
});