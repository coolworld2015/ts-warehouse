var gulp = require('gulp');
var typescript = require('gulp-tsc');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify'); 
 
gulp.task('tsc', function(){
	return gulp.src('./app/src/**/*.ts')
		.pipe(typescript({target:'ES5'}))
		.pipe(gulp.dest('./tmp/'))
		.pipe(concat('app.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task('tsc:prod', function(){
	return gulp.src('./app/src/**/*.ts')
		.pipe(typescript({target:'ES5'}))
		.pipe(gulp.dest('./tmp/'))
		.pipe(concat('app.js'))
		.pipe(uglify())
        .pipe(gulp.dest('./build'));
});

gulp.task('scripts', function () {
    return gulp.src('./tmp/*.js')
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./build'));
});

gulp.task('index', function () {
    return gulp.src('./app/index.html')
        .pipe(gulp.dest('./build'))
});

gulp.task('dev', ['tsc', 'index']);
gulp.task('release', ['tsc:prod', 'index']);

gulp.task('watch', ['dev'], function () {
    gulp.watch('./app/src/**', ['dev']);
});