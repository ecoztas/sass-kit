// DEFINE: Package(s).
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');

// TASK 0: Default
gulp.task('default', function() {
    console.log('Works fine!');
});

// TASK 1: SASS
gulp.task('sass', function() {
    return (
        gulp.src('sass/application.scss')
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('styles'))
        .pipe(cssmin())
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('styles'))
    );
});
