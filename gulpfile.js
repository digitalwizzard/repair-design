'use strict';
const gulp = require('gulp');
const browserSync = require('browser-sync').create();
const cleanCSS = require('gulp-clean-css');
const rename = require("gulp-rename");
const sass = require('gulp-sass');
const watchSass = require('gulp-watch-sass')
const autoprefixer = require('gulp-autoprefixer');

gulp.task('browser-sync', function() {
  browserSync.init({
      server: {
          baseDir: "./"
      }
  });
  gulp.watch("./*.html").on('change', browserSync.reload);
});

gulp.task('mincss', function() {

  return gulp.src("src/css/*.css")
  
  .pipe(rename({suffix: ".min"}))
  
  .pipe(cleanCSS())
  
  .pipe(gulp.dest("app/css"));  
  });


  gulp.task('sass', function (done) {
    gulp.src('./sass/**/*.scss')
      .pipe(sass().on('error', sass.logError))
      .pipe(gulp.dest('./css'));
      done();
  });
   
  gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
  });


exports.default = () => (
    gulp.src('src/app.css')
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(gulp.dest('dist'))
);