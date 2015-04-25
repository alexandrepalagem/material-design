var config      = require('../../config');

gulp.task('watch', function(callback) {
    // sass
    gulp.watch(config.preprocessor.src, [config.preprocessor.choice]);

    // images
    gulp.watch(config.images.src, ['images']);

    // js
    gulp.watch(config.js.src, ['uglifyJs']);

    // js tests
    gulp.watch(config.tests.src, ['test']);

    // ui
    gulp.watch(config.html.src, ['copy-html']);

    // fonts
    gulp.watch(config.fonts.src, ['copy-fonts']);
});
