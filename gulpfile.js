var gulp = require('gulp'),
	less = require('gulp-less'),	
	path = require('path');

gulp.task('default', function() {

});


 
gulp.task('less', function () {
  return gulp.src('./less/**/*.less')
    .pipe(less({
      paths: [ path.join(__dirname, 'less', 'includes') ]
    }))
    .pipe(gulp.dest('./public/css'));
});