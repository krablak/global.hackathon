var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');
var jshintstylish = require('jshint-stylish');
var concat = require('gulp-concat');
var docco = require("gulp-docco");

// Location variables
var paths = {
	src : {
		all : ['./src/**/**.*', './src/**.*'],
		html : './src/**/**.html',
		fonts : './src/fonts/**.*',
		images : ["./src/img/**.*"],
		js : ["./src/js/**.js", "./src/js/**.js"],
		tests : './tests/**/**.html',
	},
};

// Development watch task for JS hinting
gulp.task('devel', function() {
	gulp.watch([paths.src.js, paths.src.tests], ['jshint', 'doc']);
});

gulp.task('doc', function() {
	gulp.src(paths.src.js).pipe(docco()).pipe(gulp.dest('./doc'));
});

gulp.task('jshint', function() {
	gulp.src(paths.src.js)
	//.pipe(plumber())
	.pipe(jshint()).pipe(jshint.reporter('jshint-stylish'));
});

