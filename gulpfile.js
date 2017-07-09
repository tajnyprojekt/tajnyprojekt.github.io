const gulp = require('gulp');
const sass = require('gulp-sass');
const gplumber = require('gulp-plumber');
const sourcemaps = require('gulp-sourcemaps');
const autoprefixer = require('gulp-autoprefixer');
const cssShorthand = require('gulp-shorthand');
const cleanCSS = require('gulp-clean-css');
const uncss = require('gulp-uncss');
const gcmq = require('gulp-group-css-media-queries');

const uglify = require('gulp-uglify');
const babel = require('gulp-babel');
const browserify = require('gulp-browserify');

const errorHandler = function() {
    return gplumber(function(error) {
        console.log(error.message);
    })
};

const autoprefixerOptions = {
    browsers: ['last 2 versions', '> 1%', 'Firefox ESR']
};

gulp.task('sass', () => {
    return gulp.src('resources/scss/style.scss')
        .pipe(errorHandler())
        .pipe(sass.sync({outputStyle: 'expanded'}))
        .pipe(autoprefixer(autoprefixerOptions))
        .pipe(cssShorthand())
        .pipe(gcmq())
        .pipe(gulp.dest('resources/css'))
});

gulp.task('minify-css', ['sass'], () => {
    return gulp.src('resources/css/style.css')
        .pipe(cleanCSS())
        .pipe(gulp.dest('css'))
});

gulp.task('watch', () => {
    gulp.watch('resources/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'watch']);
gulp.task('production', ['minify-css']);