var gulp = require('gulp');
var path = require('path');

var inject = require('gulp-inject');
var less = require('gulp-less');
var cssnano = require('gulp-cssnano');
var concat = require('gulp-concat');
var rename = require('gulp-rename');

/*
var LessPluginCleanCSS = require('less-plugin-clean-css');
var cleancss = new LessPluginCleanCSS({ advanced: true });
*/

//gulp.task('default', ['less', 'mincss']); 

gulp.task('less', function () {
  return gulp.src('./css/main.less')
    .pipe(less({
      paths: ['.']
      //plugins: [ cleancss ]
    }))
    .pipe(gulp.dest('./css'))
    //good flow? 
    .pipe(rename('mainmin.css'))
    .pipe(gulp.dest('./css/min'))
    .pipe(cssnano())
    .pipe(gulp.dest('./css/min'))
});

gulp.task('scripts', function () {
  return gulp.src(['./js/data.js', './js/*.js'])
  .pipe(concat('all.js'))
  .pipe(gulp.dest('./js/all/'))
});

gulp.task('index', function () {
  var target = gulp.src('./index.html');
  var sources = gulp.src(['./css/*.css'], {read: false});

  return target.pipe(inject(sources))
    .pipe(gulp.dest('./'));
});
