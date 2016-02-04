var 
  gulp = require('gulp'),
  path = require('path'),
  inject = require('gulp-inject'),
  less = require('gulp-less'),
  cssnano = require('gulp-cssnano'),
  concat = require('gulp-concat'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  kit = require('gulp-kit'),
  inline = require('gulp-inline'),
  series = require('stream-series'),
  htmlmin = require('gulp-htmlmin'),
  gzip = require('gulp-gzip');
/*
var runSequence = require('run-sequence');
var del = require('del');
var fs = require('fs');
*/

gulp.task('default', ['minifyhtml']);

/*
gulp.task('build', function(callback) {
  runSequence('less',
              ['head-scripts', 'body-scripts'],
              'kit',
              'inject',
              'inline',
              'minifyhtml',
              callback);
});
*/

gulp.task('less', function () {
  return gulp.src('./css/main.less')
    .pipe(less({relativeUrls: true}))
    .pipe(gulp.dest('./css'))
    .pipe(cssnano())
    .pipe(rename('main.min.css'))
    .pipe(gulp.dest('./css/min'))
});

gulp.task('scripts', ['less']);
gulp.task('head-scripts', function () {
  return gulp.src(['./js/cacheMainBackground.js', './js/plugins.js'])
    .pipe(concat('headScriptsAll.js'))
    //.pipe(gulp.dest('./js/all')) -- no need for this action, but is it good practice?
    .pipe(rename('headScriptsAllMin.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js/all'))
});

gulp.task('body-scripts', function () {
  return gulp.src(['./js/data.js', './js/main.js'])
    .pipe(concat('bodyScriptsAll.js'))
    //.pipe(gulp.dest('./js/all')) -- no need for this action, but is it good practice?
    .pipe(rename('bodyScriptsAllMin.js'))
    .pipe(uglify())
    .pipe(gulp.dest('./js/all'))
});

gulp.task('kit', ['scripts'], function () {
  return gulp.src('./index.kit')
    .pipe(kit({compilePartials: true}))
    .pipe(gulp.dest('./'))
});

gulp.task('inject', ['kit'], function () {
  var options = {
    relative: true 
  };

  return gulp.src('./index.html')
    .pipe(inject(gulp.src(['./css/min/normalize.min.css', './css/min/main.min.css'], {read: false}), options))
    .pipe(inject(gulp.src('./js/all/headScriptsAllMin.js', {read: false}), {name: 'head', relative: true}))
    .pipe(inject(gulp.src(['./js/vendor/director.js', './js/vendor/hogan.js', './js/all/bodyScriptsAllMin.js'], {read: false}), options))
    .pipe(gulp.dest('./'))
});

gulp.task('inline', ['inject'], function () {
  var options = {
    base: './', 
  }
  return gulp.src('./index.html')
    .pipe(inline(options))
    .pipe(gulp.dest('./'))
})

gulp.task('minifyhtml', ['inline'], function() {
  var options = {
    collapseWhitespace: true,
    removeComments: true,
    removeTagWhitespace: true,
    removeAttributeQuotes: true,
    useShortDoctype: true,
    removeScriptTypeAttributes: true,
    minifyJS: true
  }

  return gulp.src('./index.html')
    .pipe(htmlmin(options))
    .pipe(gulp.dest('./'))
});

/*
gulp.task('compress', function() {
    gulp.src('./js/all/bodyScriptsAllMin.js')//index.html')
	.pipe(gzip())
	.pipe(gulp.dest('./'));
});
*/
