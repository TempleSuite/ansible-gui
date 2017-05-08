// JW: Base setup for gulp.
// DO NOT USE THIS UNTIL WE DECIDE ON AN ASSET STRUCTURE GOING FORWARD.


// declare dependencies
const gulp = require('gulp');
const autoprefixer = require('gulp-autoprefixer');
const minifycss = require('gulp-minify-css');
const notify = require('gulp-notify');
const sass = require('gulp-ruby-sass');
const babel = require('gulp-babel');
const sourcemaps = require('gulp-sourcemaps');
const concat = require('gulp-concat');
const cacheBuster = require('gulp-cache-bust');

// source SASS files - THIS NEEDS TO BE CHANGED TO NOT IN WEB
const sassDir = 'frontend/assets/sass/**/*.scss';
// source JS files - THIS NEEDS TO BE CHANGED TO NOT IN WEB
const jsDir = 'frontend/assets/js/*.js';


// where you want the css files to be 'piped' to
const targetCSSDir = 'frontend/web/css';
// where you want the js files to be 'piped' to
const targetJSDir = 'frontend/web/js';

// all your Js tasks
gulp.task('js', function() {
	return gulp.src(jsDir)
		.pipe(sourcemaps.init())
		.pipe(babel())
		//.pipe(cacheBuster())
		.pipe(gulp.dest(targetJSDir))
		.pipe(notify('JS compiled'));
});


// all your CSS tasks

gulp.task('css', function() {
	return sass(sassDir, {
		style: 'compressed'
	})
		.on('error', sass.logError)
		.pipe(sourcemaps.init())
		.pipe(autoprefixer('last 10 versions'))
		.pipe(cacheBuster())
		.pipe(gulp.dest(targetCSSDir))
		.pipe(notify('SCSS compiled to CSS'));
});

// this watches our directories so we dont need to run gulp every ten second.
// just save your files, and tada!
gulp.task('watch', function() {
	gulp.watch(jsDir, ['js']);
	gulp.watch(sassDir,['css']);
})

gulp.task('default', ['css', 'js', 'watch']);