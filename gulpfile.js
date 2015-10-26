var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var uglify = require('gulp-uglify');
var watch = require('gulp-watch');
var less = require('gulp-less');
var livereload = require('gulp-livereload');
var lr = require('tiny-lr');
var lrserver = lr();
var livereloadport = 35729;

var paths = {
  less: ['frontend-source/less/**/*.less']
};

// gulp.task('livereload', function () {
//   console.log('test');
// });

gulp.task('less', function() {
  gulp.src('frontend-source/less/adminDTE/adminDTE.less')
    .pipe(less({
      paths:['frontend-source/less/']
    }))
    .pipe(gulp.dest('public/css/'))
    .pipe(minifyCss(/*{
      keepSpecialComments: 0 
    }*/))
    .pipe(livereload(lrserver));
});

gulp.task('watch', function() {
  // livereload.listen();
  gulp.watch(paths.less, ['less']);
  // watch(['**/*.less'])
  // .pipe(less());
});
gulp.task('default', ['watch']);
// gulp.task('default', ['less'], function(){
//   watch(paths.less);
// });
// gulp.task('default', function () {
//     gulp.src(['**/*.html', '**/*.php', '**/*.phtml', '**/*.volt', 'js/*.js'])
//         .pipe(watch(['**/*.html', '**/*.php', '**/*.phtml', '**/*.volt', 'js/*.js']));
// });