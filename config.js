'use strict';

// =======================  PLUGINS ===================================

global['gulp']    = require('gulp');
global['plugin']  = require('gulp-load-plugins')({
                       pattern       : ['*']
                     , scope         : ['dependencies', 'devDependencies']
                     , replaceString : /^gulp(-|\.)/
                     , camelize      : true
                     , lazy          : true
                     , rename        : {
                         'gulp-filesize': 'size'
                     }
                   });

// paths map
var path = {
  src:  '.'
 ,dest: 'build'
};

// set configs for plugins
module.exports = {
  src: path.src,
  dest: path.dest,
  tests: {
    src: path.src + '/assets/tests/*.js'
  },
  esformatter: {
    src: path.src + '/assets/js/*',
    dest: path.src + '/assets/js'
  },
  sftp: {
    src: path.dest + '/**/*',
    host: '1.1.1.1',
    username: 'admin',
    password: 'password',
    remotePath: '/home/'
  },
  js: {
    src: path.src + '/assets/js/*.js',
    dest: path.dest + '/js',
    uglifyJs: {
      src: path.src + '/assets/*.js',
      dest: path.dest + '/js'
    }
  },
  browserSync: {
    server: { baseDir: path.dest }
  },
  images: {
    src: path.src + '/assets/img/**',
    dest: path.dest + '/img'
  },
  fonts: {
    src: path.src + '/assets/font/**',
    dest: path.dest + '/font'
  },
  html: {
    src: path.src + '/assets/html/**/*',
    dest: path.dest
  },
  vendor: {
    src: path.src + '/assets/vendor/**/*',
    dest: path.dest + '/vendor'
  },
  preprocessor: {
    choice    : 'sass', //sass
    src       : path.src + '/assets/scss/**/*.scss', //dir of sass
    dest      : path.dest + '/css' //dir of css dest
  }
};
