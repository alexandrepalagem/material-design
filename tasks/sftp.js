var config          = require('../config')

gulp.task('sftp', function () {
    return gulp.src(config.sftp.src)
        .pipe(plugin.sftp({
            host: config.sftp.host,
            user: config.sftp.username,
            pass: config.sftp.password,
            remotePath: config.sftp.remotePath
        }));
});
