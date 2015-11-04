var gulp = require('gulp');
var typescript = require('gulp-tsc');

var concat = require('gulp-concat');
var uglify = require('gulp-uglify'); 

var scripts = [
    './app/tmp/*.js',
    './app/vendors/angular/angular.js'
//    './app/vendors/angular-bootstrap/ui-bootstrap-tpls.js',
//    './app/vendors/angular-ui-router/release/angular-ui-router.js',
//    './app/src/**/!(*.test).js'
];

var getScripts = function () {
    return gulp.src(scripts)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./build'));
};

gulp.task('scripts', function () {
    return gulp.src(scripts)
        .pipe(concat('app.js'))
        .pipe(gulp.dest('./build'));
});
 
gulp.task('tsc', function(){
	return gulp.src('./app/src/**/*.ts')
		.pipe(typescript({target:'ES5'}))
		.pipe(gulp.dest('./app/tmp/'))
});

gulp.task('tsc:prod', function(){
	return gulp.src('./app/src/**/*.ts')
		.pipe(typescript({target:'ES5'}))
		.pipe(gulp.dest('./tmp/'))
		.pipe(concat('app.js'))
		.pipe(uglify())
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
    gulp.watch('./app/tmp/**', ['scripts']);
});