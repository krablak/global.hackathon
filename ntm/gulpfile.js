var gulp = require('gulp');
var gutil = require('gulp-util');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');
var jshint = require('gulp-jshint');
var jshintstylish = require('jshint-stylish');
var concat = require('gulp-concat');
var docco = require("gulp-docco");
var del = require('del')

// Location variables
var paths = {
	src : {
		all : ['./src/**/**.*', './src/**.*'],
		html : './src/html/index.html',
		fonts : './src/fonts/**.*',
		styles : './src/css/**.*',
		images : ["./src/img/**.*"],
		js : ["./src/js/**.js", "./src/js/**.js"],
		tests : './tests/**/**.html',
		build : "./build/"
	},
};

// Development watch task for JS hinting
gulp.task('devel', function() {
	gulp.watch([paths.src.js, paths.src.tests], ['jshint', 'doc']);
});

gulp.task('doc', function() {
	gulp.src(paths.src.js).pipe(docco()).pipe(gulp.dest('./doc'));
});

gulp.task('clean', function(cb) {
	del([paths.src.build], cb);
});

gulp.task('build', ['clean'], function() {
	gulp.src(paths.src.js).pipe(concat('all.js')).pipe(gulp.dest('./build/js/'));
	gulp.src(paths.src.styles).pipe(concat('all.css')).pipe(gulp.dest('./build/css/'));
	gulp.src(paths.src.fonts).pipe(gulp.dest('./build/fonts/'));
	gulp.src(paths.src.images).pipe(gulp.dest('./build/img/'));
	gulp.src(paths.src.html).pipe(gulp.dest('./build/'));
});

gulp.task('jshint', function() {
	gulp.src(paths.src.js)
	//.pipe(plumber())
	.pipe(jshint()).pipe(jshint.reporter('jshint-stylish'));
});

