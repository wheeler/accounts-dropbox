Package.describe({
  name: 'wheeler:accounts-dropbox',
  version: '1.0.0',
  summary: 'Login service for Dropbox accounts',
  git: 'https://github.com/wheeler/accounts-dropbox.git',
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom("METEOR@1.2.0.2");
  
  api.use('accounts-base', ['client', 'server']);
  // Export Accounts (etc) to packages using this one.
  api.imply('accounts-base', ['client', 'server']);
  api.use('accounts-oauth', ['client', 'server']);
  api.use('wheeler:dropbox@1.0.0', ['client', 'server']);

  api.addFiles('dropbox_login_button.css', 'client');

  api.addFiles("dropbox.js");
});
