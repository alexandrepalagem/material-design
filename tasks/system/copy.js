var config  = require('../../config');

gulp.task('copy-html', function() {
  gulp.src([config.html.src])
  .pipe(plugin.changed(config.html.dest))
  .pipe(
    gulp.dest(config.html.dest)
  )
  .pipe(plugin.browserSync.reload({ stream: true }));
});

gulp.task('copy-vendor', function() {
  gulp.src([config.vendor.src])
  .pipe(
    gulp.dest(config.vendor.dest)
  )
});

gulp.task('copy-fonts', function() {
  gulp.src([config.fonts.src])
  .pipe(
    gulp.dest(config.fonts.dest)
  )
});

gulp.task('copy-imgs', function() {
  gulp.src([config.images.src])
  .pipe(
    gulp.dest(config.images.dest)
  )
});

gulp.task('copy-js', function() {
  gulp.src([config.js.src])
  .pipe(
    gulp.dest(config.js.dest)
  )
});

gulp.task('copy-assets', ['copy-html', 'copy-fonts', 'copy-imgs', 'copy-js', 'copy-vendor']);
