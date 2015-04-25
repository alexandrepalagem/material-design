var config = require('../../config');

gulp.task('sass', function() {
  gulp.src(config.preprocessor.src)
    .pipe(plugin.scssLint({
      'config': config.src + '/scss-lint.yml',
   }))
   .pipe(plugin.scssLint.failReporter())
   .pipe(plugin.compass({
      css: config.dest + '/css',
      sass: config.src + '/assets/scss',
      style: 'compressed',
      debug: false
   }))
    .pipe(plugin.sourcemaps.init())
    .pipe(plugin.concat('main.min.css'))
    .pipe(plugin.minifyCss())
    .pipe(plugin.sourcemaps.write('./'))
    .pipe(gulp.dest(config.preprocessor.dest))
    .pipe(plugin.browserSync.reload({stream:true}));
});
