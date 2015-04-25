var config = require('../../config');

gulp.task('uglifyJs', function() {
  return gulp.src(
    [
      config.js.uglifyJs.src + '/*.js',
      config.js.uglifyJs.src + '/test/aa.js'
    ]
  )
  .pipe(plugin.uglify())
  .pipe(plugin.sourcemaps.init())
  .pipe(plugin.size())
  .pipe(plugin.sourcemaps.write('./'))
  .pipe(gulp.dest(config.js.dest))
});
