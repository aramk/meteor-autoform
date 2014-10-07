Package.describe({
  name: "aldeed:autoform",
  summary: "Easily create forms with automatic insert and update, and automatic reactive validation.",
  git: "https://github.com/aldeed/meteor-autoform.git",
  version: "3.2.0"
});

Package.on_use(function(api) {
  // Dependencies

  // 0.9.0+
  if (api.versionsFrom) {
    api.versionsFrom('METEOR@0.9.1');
    // common
    api.use('aldeed:simple-schema@1.0.0');
    api.use('check');
    // client
    api.use(['livedata', 'underscore', 'deps', 'templating', 'ui', 'blaze'], 'client');
    api.use('mrt:moment@2.6.0', 'client');
    api.use('mrt:moment-timezone@0.2.1', 'client', {weak: true});
    api.use(['aldeed:collection2@2.0.0', 'reload'], 'client', {weak: true});
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
    // functions and utilities
    'utility.js',
    'form-preserve.js',
    'autoform-hooks.js',
    'autoform-inputs.js',
    'autoform-formdata.js',
    'autoform-arrays.js',
    'autoform.js',
    // components that render a form
    'components/autoForm/autoForm.html',
    'components/autoForm/autoForm.js',
    'components/quickForm/quickForm.html',
    'components/quickForm/quickForm.js',
    // components that render controls within a form
    'components/afArrayField/afArrayField.html',
    'components/afArrayField/afArrayField.js',
    'components/afEachArrayItem/afEachArrayItem.html',
    'components/afEachArrayItem/afEachArrayItem.js',
    'components/afFieldInput/afFieldInput.html',
    'components/afFieldInput/afFieldInput.js',
    'components/afFieldLabel/afFieldLabel.html',
    'components/afFieldSelect/afFieldSelect.html',
    'components/afFieldSelect/afFieldSelect.js',
    'components/afFormGroup/afFormGroup.html',
    'components/afFormGroup/afFormGroup.js',
    'components/afObjectField/afObjectField.html',
    'components/afQuickField/afQuickField.html',
    'components/afQuickField/afQuickField.js',
    'components/afQuickFields/afQuickFields.html',
    'components/afQuickFields/afQuickFields.js',
    // global helpers
    'autoform-helpers.js',
    // validation
    'autoform-validation.js',
    // event handling
    'autoform-events.js',
    // public API
    'autoform-api.js'
  ], 'client');
});

Package.on_test(function (api) {
  if (api.versionsFrom) {
    api.use(['aldeed:autoform', 'tinytest', 'underscore']);
  } else {
    api.use(['autoform', 'tinytest', 'underscore']);
  }
  
  api.add_files(['tests/utility-tests.js', 'tests/autoform-tests.js']);
});
