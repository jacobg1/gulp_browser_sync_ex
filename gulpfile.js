const gulp = require('gulp')
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create()
const reload = browserSync.reload

// Static server
gulp.task('browser-sync', function () {
  browserSync.init({
    server: {
      baseDir: './'
    }
  })
})

gulp.task('watch', function () {

  // watch html
  gulp.watch('*.html').on('change', reload)

  // watch scss
  gulp.watch('*.scss', ['sass'])

  //reload after css change
  gulp.watch('*.css').on('change', reload)

})

//process scss
gulp.task('sass', function () {
  return gulp.src('*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./'))
})

gulp.task('default', function () {
  gulp.start('browser-sync', 'sass', 'watch')
})
