/**
 * ReactCompass - a carefully crafted Compass component for React.
 *
 * Copyright (c) 2016 Bohdan Shtepan
 * http://modern-dev.com/
 *
 * Licensed under the MIT license.
 */

var gulp = require('gulp'),
    cssmin = require('gulp-cssmin'),
    rename = require('gulp-rename'),
    autoprefixer = require('gulp-autoprefixer'),
    apCfg = {
        browsers: ['last 3 versions']
    };

gulp.task('css', function() {
    return gulp.src('./src/*.css')
        .pipe(autoprefixer(apCfg))
        .pipe(gulp.dest('dist'));
});

gulp.task('css:min', function() {
    return gulp.src('./src/*.css')
        .pipe(autoprefixer(apCfg))
        .pipe(cssmin())
        .pipe(rename({ suffix: '.min' }))
        .pipe(gulp.dest('dist'));
});

gulp.task('css:dev', ['css:min'], function() {
    return gulp.src('./dist/*.min.css')
        .pipe(gulp.dest('example'));
});

gulp.task('default', ['css', 'css:dev']);