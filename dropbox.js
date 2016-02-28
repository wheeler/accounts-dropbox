Accounts.oauth.registerService('dropbox');

if (Meteor.isClient) {
  Meteor.loginWithDropbox = function(options, callback) {
    if (!callback && typeof options === "function") {
      callback = options;
      options = null;
    }

    var credentialRequestCompleteCallback = Accounts.oauth.credentialRequestCompleteHandler(callback);
    Dropbox.requestCredential(options, credentialRequestCompleteCallback);
  };
} else {
  Accounts.addAutopublishFields({
    forLoggedInUser: ['services.dropbox'],
    forOtherUsers: []
  });
}
