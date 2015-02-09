/*
 * ConfigService is a function that returns the configuration that exists
 * in this same file, which you might want to edit and tune if needed.
 */

var avConfigData = {
  // the base url path for ajax requests, for example for sending ballots or
  // getting info about an election. This url is usually in the form of
  // 'https://foo/api/v3/' and always ends in '/'.
  theme: "default",
  baseUrl: "http://agora.dev/elections/api/",

  // AuthApi base url
  authAPI: "http://agora.dev/authapi/api/",
  // Agora Elections base url
  electionsAPI: "http://agora.dev/elections/api/",

  authorities: [ "local-auth2" ],
  director: "local-auth1",

  // default language of the application
  language: "en",

  // if we are in debug mode or not
  debug: true,

  // contact data where users can reach to a human when they need it
  contact: {
    email: "contact@example.com",
    twitter: "twitter"
  },

  help: {
    info:"<p></p>"
  },

  success: {
    text: "<p>¡Congratulations! You cast your vote with <a href=\"https://agoravoting.com\" target=\"_blank\">Agora Voting</a>.Your ballot locator is:</p></h3><p> <strong>{{ballotHash}}</strong></p>"
  },

  tos: {
    text:"",
    tile: ""
  }
};

angular.module('avConfig', [])
  .factory('ConfigService', function() {
      return avConfigData;
  });
