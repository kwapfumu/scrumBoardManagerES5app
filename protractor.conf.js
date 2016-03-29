// Protractor configuration
// https://github.com/angular/protractor/blob/master/referenceConf.js

'use strict';

exports.config = {
  //use this if you want to test using protractor protractor.conf.js
  seleniumAddress: 'http://127.0.0.1:4444/wd/hub',
  //bypass selenium server and connects to chromedriver, ignores seleniumAddress
  // ---- To connect directly to Drivers ------------------------------------
  // Boolean. If true, Protractor will connect directly to the browser Drivers
  // at the locations specified by chromeDriver and firefoxPath. Only Chrome
  // and Firefox are supported for direct connect.
  directConnect: true,
  // The timeout for each script run on the browser. This should be longer
  // than the maximum time your application needs to stabilize between tasks.
  allScriptsTimeout: 110000,

  // A base URL for your application under test. Calls to protractor.get()
  // with relative paths will be prepended with this.
  baseUrl: 'http://localhost:' + (process.env.PORT || '9000'),

  // If true, only chromedriver will be started, not a standalone selenium.
  // Tests for browsers other than chrome will not run.
  chromeOnly: true,

  // list of files / patterns to load in the browser
  specs: [
    'e2e/**/*.spec.js'
  ],

  // Patterns to exclude.
  exclude: [],

  // ----- Capabilities to be passed to the webdriver instance ----
  //
  // For a full list of available capabilities, see
  // https://code.google.com/p/selenium/wiki/DesiredCapabilities
  // and
  // https://code.google.com/p/selenium/source/browse/javascript/webdriver/capabilities.js
  /*capabilities: {
    'browserName': 'chrome'
  },*/
  multiCapabilities: [{'browserName': 'firefox'}, {'browserName': 'chrome'}],

  // ----- The test framework -----
  //
  // Jasmine and Cucumber are fully supported as a test and assertion framework.
  // Mocha has limited beta support. You will need to include your own
  // assertion framework if working with mocha.
  framework: 'jasmine',

  // ----- Options to be passed to minijasminenode -----
  //
  // See the full list at https://github.com/juliemr/minijasminenode
  jasmineNodeOpts: {
    showColors: true,
    defaultTimeoutInterval: 30000
  }
};
