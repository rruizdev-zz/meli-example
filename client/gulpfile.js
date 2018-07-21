'use strict';

const autoprefixer = require('gulp-autoprefixer');
const del = require('del');
const gulp = require('gulp');
const uglify = require('gulp-uglify');

const AUTOPREFIXER_BROWSERS = [
    'ie >= 10',
    'ie_mob >= 10',
    'ff >= 30',
    'chrome >= 34',
    'safari >= 7',
    'opera >= 23',
    'ios >= 7',
    'android >= 4.4',
    'bb >= 10'
];

gulp.task('scripts', function() {
    return gulp.src('./scripts/**/*.js')
      .pipe(uglify())
      .pipe(gulp.dest('./public/javascripts'));
});