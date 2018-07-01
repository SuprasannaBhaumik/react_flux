var gulp = require('gulp');
var connect = require('gulp-connect');
var open = require('gulp-open');
var open = require('gulp-open');

var browserify = require('browserify'); //bundles js
var reactify = require('reactify'); // converts the JSX to JS
var source = require('vinyl-source-stream'); //uses conventional text streams with Gulp

var concat = require('gulp-concat');

var eslint = require('gulp-eslint');


var config = {
	port : 9005,
	devBaseUrl : 'http://localhost',
	paths : {
		html:'./src/*.html',
		js: './src/**/*.js',
		css:[
			'node_modules/bootstrap/dist/css/bootstrap.min.css',
			'node_modules/bootstrap/dist/css/bootstrap-theme.min.css'
		],
		dist: './dist',
		mainJs : 'src/main.js'
	} 
};
//start a local development server
gulp.task("connect", function(){
	connect.server({
		root: ['dist'],
		port: config.port,
		base : config.devBaseUrl,
		livereload: true
	});
});

//this task open will run after connect.
gulp.task('open', ['connect'], function(){
	gulp.src('./dist/index.html')
		.pipe(open({ uri: config.devBaseUrl + ':' + config.port + '/'}));
});

gulp.task('html', function(){
	gulp.src(config.paths.html)
		.pipe(gulp.dest(config.paths.dist))
		.pipe(connect.reload());
});

gulp.task('js', function(){
	browserify(config.paths.mainJs)
		.transform(reactify)
		.bundle()
		.on('error', console.error.bind(console))
		.pipe(source('bundle.js'))
		.pipe(gulp.dest(config.paths.dist + '/scripts'))
		.pipe(connect.reload());
});

gulp.task('css', function(){
	gulp.src(config.paths.css)
		.pipe(concat('bundle.css'))
		.pipe(gulp.dest(config.paths.dist + '/css'));

});

gulp.task('eslint', function(){
	return gulp.src(config.paths.js)
			   .pipe(eslint.format());
});

gulp.task('watch', function(){
	gulp.watch(config.paths.html,['html']);
	gulp.watch(config.paths.js,['js', 'eslint']);
});

gulp.task('default', ['html', 'js', 'css', 'eslint', 'open', 'watch']);