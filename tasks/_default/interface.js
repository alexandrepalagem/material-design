var config      = require('../../config');

gulp.task('interface', function(callback) {
  plugin.runSequence(
    [
        'uglifyJs'
      , 'copy-assets'
      , 'sass'
      , 'watch'
      , 'browserSync'
    ],
    callback
  );
});
