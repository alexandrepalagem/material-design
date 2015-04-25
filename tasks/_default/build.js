var config      = require('../../config');

gulp.task('build', ['images', 'uglifyJs', 'sass', 'copy-assets']);
