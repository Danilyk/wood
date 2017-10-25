var gulp = require('gulp');
var gutil = require('gulp-util');
var notify = require('gulp-notify');
var sass = require('gulp-sass');
var rename = require('gulp-rename');
var autoprefix = require('gulp-autoprefixer');
var minifyCSS = require('gulp-minify-css');
var uglify = require('gulp-uglify');

var sassDir = 'app/sass/main.sass',
    cssDir = 'app/css';
    
// gulp-util gulp-notify gulp-sass gulp-rename gulp-autoprefixer gulp-minify-css gulp-uglify
// ---------------------------------------------------SASS compose
gulp.task('sass', function () {
    return gulp.src(sassDir)
	.pipe(sass({
    includePaths: require('node-normalize-scss').includePaths,
    outputStyle: 'compressed'
  }).on('error', gutil.log))
   	.pipe(autoprefix({
   		 browsers: ['last 10 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6'],
   		 cascade: true
   		}))
   	.pipe(minifyCSS())
   	.pipe(rename('style.min.css'))
    .pipe(notify('CSS minified'))
    .pipe(gulp.dest(cssDir));
});
     
gulp.task('watch', function () {
    gulp.watch(sassDir , ['sass']);
});

gulp.task('default', ['watch']);

