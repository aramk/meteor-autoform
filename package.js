Package.describe({
  name: "aldeed:autoform",
  summary: "Easily create forms with automatic insert and update, and automatic reactive validation.",
  git: "https://github.com/aldeed/meteor-autoform.git",
  version: "0.17.1"
});

Package.on_use(function(api) {
  // Dependencies

  // 0.9.0+
  if (api.versionsFrom) {
    // common
    api.use('aldeed:simple-schema@0.7.0');
    api.use('check@1.0.0');
    api.use('mrt:moment@2.6.0', 'client');
    api.use('livedata@1.0.0', 'client');
    api.use('underscore@1.0.0', 'client');
    api.use('deps@1.0.0', 'client');
    api.use('templating@1.0.0', 'client');
    api.use('handlebars@1.0.0', 'client');
    api.use('ui@1.0.0', 'client');
    api.use('aldeed:collection2@0.4.6', ['client'], {weak: true});
    // Imply SS to make sure SimpleSchema object is available to app
    api.imply('aldeed:simple-schema');
  }
  // Pre-0.9.0
  else {
    api.use(['simple-schema', 'check']);
    api.use(['moment', 'livedata', 'underscore', 'deps', 'templating', 'handlebars', 'ui'], 'client');
    api.use(['reload'], ['client'], {weak: true});
    api.use(['collection2'], ['client'], {weak: true});
    // Imply SS to make sure SimpleSchema object is available to app
    api.imply('simple-schema');
  }  
  
  // Exports
  api.export('AutoForm', 'client');
  api.export('Utility', 'client', {testOnly: true});
  // Files
  api.add_files(['autoform-common.js']);
  api.add_files([
    // bootstrap3 Template
    'templates/bootstrap3/bootstrap3.html',
    'templates/bootstrap3/bootstrap3.js',
    // bootstrap3-span Template
    'templates/bootstrap3-span/bootstrap3-span.html',
    'templates/bootstrap3-span/bootstrap3-span.js',
    // bootstrap3-horizontal Template
    'templates/bootstrap3-horizontal/bootstrap3-horizontal.html',
    'templates/bootstrap3-horizontal/bootstrap3-horizontal.js',
    'templates/bootstrap3-horizontal/bootstrap3-horizontal.css',
    // plain Template
    'templates/plain/plain.html',
    'templates/plain/plain.js',
    // plain-fieldset Template
    'templates/plain-fieldset/plain-fieldset.html',
    'templates/plain-fieldset/plain-fieldset.js',
    // plain-span Template
    'templates/plain-span/plain-span.html',
    'templates/plain-span/plain-span.js',
    // Core Files
    'autoform.html',
    'utility.js',
    'form-preserve.js',
    'autoform-hooks.js',
    'autoform-inputs.js',
    'autoform-formdata.js',
    'autoform-arrays.js',
    'autoform.js',
    'autoform-helpers.js',
    'autoform-validation.js',
    'autoform-events.js',
    'autoform-api.js'
  ], 'client');
});

Package.on_test(function (api) {
  if (api.versionsFrom) {
    api.use('aldeed:autoform');
    api.use('tinytest@1.0.0');
    api.use('underscore@1.0.0');
  } else {
    api.use(['autoform', 'tinytest', 'underscore']);
  }
  
  api.add_files(['tests/utility-tests.js', 'tests/autoform-tests.js']);
});
