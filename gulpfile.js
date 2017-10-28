const gulp = require('gulp')
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

  // watch css
  gulp.watch('*.css').on('change', reload)
})

gulp.task('default', function () {
  gulp.start('browser-sync', 'watch')
})
