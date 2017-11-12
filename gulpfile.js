var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('hello', function() {
  console.log('Hello Zell');
});

gulp.task('watch', ['browserSync'], function(){
  gulp.watch('app/js/**/*.js'); 
  gulp.watch('index.html');
  // Other watchers
})

gulp.task('browserSync', function() {
  browserSync.init({
    server: {
      baseDir: 'app'
    },
  })
})