const gulp = require('gulp');
const sass = require('gulp-sass');
const BS = require('browser-sync').create();

function style (){

  return gulp.src('./scss/**/*.scss').pipe(sass()).pipe(gulp.dest('./css'))
}

function streamBS(){
  //return gulp.src('./css/**/*.css').pipe(BS.stream())
  BS.init({
    server:{
      baseDir: './'
    }
  })
}



function watch(){
  streamBS();

  gulp.watch('./scss/**/*.scss', style)
  
  gulp.watch('./css/**/*.css').on('change', BS.reload);
  gulp.watch('./*.html').on('change', BS.reload);

}

exports.style = style;
exports.watch = watch;
exports.BS = streamBS;