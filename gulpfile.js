/**
 * SASS-KIT for SASS development.
 * 
 * 
 * 
 * @package     sass-kit
 * @author      ÖZTAŞ, Emre Can <me@emrecanoztas.com>
 * @copyright   2020
 * @license     MIT
 * @link        https://github.com/ecoztas/sass-kit
 * @since       v1.0
 */

// DEFINE: Package(s).
// =============================================================================
var gulp = require('gulp');
var sass = require('gulp-sass');
var cssmin = require('gulp-cssmin');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');

// TASK: Default
// =============================================================================
gulp.task('default', function () {
    console.log('Works fine!');
});

// TASK: SASS
// =============================================================================
gulp.task('sass', function () {
    return (
        gulp.src('./theme.scss')
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