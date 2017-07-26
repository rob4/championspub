var gulp = require('gulp'),
watch = require('gulp-watch'),
browserSync  = require('browser-sync').create();


gulp.task('watch', function() {

  browserSync.init({
  server: {
    baseDir: "app"
  }

  });

  watch('./app/**/*.html')
  watch('.app/Menu.html', function() {
    browserSync.relaod();
  });

  watch('./app/styles/**/*.css', function() { // anytime a change is made
    gulp.start('cssInject'); // cssInject task runs.
  });

});

gulp.task('cssInject', ['styles'], function() { //styles is a depndency of cssInject a made up name and runs before css inject
  return gulp.src('./app/styles/main.css') //then css is generated
  .pipe(browserSync.stream()); //finally piped into browserSync
});
