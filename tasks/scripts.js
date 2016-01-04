var pkg = require('../package.json');
var dirs = pkg['configs'].directories;


var del          = require('del');
var gulp 		  = require('gulp');
var concat 	  = require('gulp-concat');
var uglify 	  = require('gulp-uglify');
var filter       = require('gulp-filter');
var del          = require('del');


var scripts = [
	dirs.src.vendor+'/ionic/release/js/ionic.bundle.js'
];

gulp.task('vendors:clean', function(next){
	del([dirs.public.vendor], next);
});

gulp.task('vendors', ['vendors:clean'], function(){
	gulp.src(scripts)
		.pipe(concat('scripts.js'))
		.pipe(uglify())
		.pipe(gulp.dest(dirs.public.vendor));
});

gulp.task('scripts:clean', function(next){
	del([dirs.public.js + '/**/*.js'], next);
});

gulp.task('scripts', function(){
	var jsFilter  = filter('**/*.js');

	return gulp.src([dirs.src.js + '/**/*.js', '!' + dirs.src.vendor + '/**/*'])
		.pipe(jsFilter)
		//.pipe(uglify())
		.pipe(jsFilter.restore())
		.pipe(gulp.dest(dirs.public.js));
})