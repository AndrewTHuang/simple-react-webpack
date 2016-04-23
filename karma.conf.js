var path = require('path');
var webpackConfig = require('./webpack.config');
webpackConfig.devtool = 'inline-source-map';

module.exports = function(config) {
  config.set({
    browsers: [ 'PhantomJS' ],
    singleRun: true,
    frameworks: [ 'mocha', 'chai' ],
    files: [
      'tests.webpack.js'
    ],
    preprocessors: {
      'tests.webpack.js': [ 'webpack', 'sourcemap' ]
    },
    plugins: [
      require('karma-webpack'),
      require('karma-mocha'),
      require('karma-chai'),
      require('karma-sourcemap-loader'),
      require('karma-spec-reporter'),
      require('karma-phantomjs-launcher')
    ],
    reporters: [ 'spec' ],
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
