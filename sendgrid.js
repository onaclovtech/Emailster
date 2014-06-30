// This doesn't currently work at all, but all are welcome to assist.
//(the send function when used in an actual controller WAS working, but let's make it an injectible service)
// I'm trying to mimic how Firebases 
// https://cdn.firebase.com/libs/angularfire/0.6.0/angularfire.js
// does it, mostly because I don't really know how to do it, and this was my first thought to create a "service" that can be
// interchanged depending on the provider. All it requires to provide (right now) is the send function, 
// along with the correct matching parameters (and order).


// I think I'm getting closer, I basically can return an "object" using the factory, which I can then call the $send function on.
// someone/ anyone please point me in the right direction.
// Sendgrid Emailster
// This guy should be returning promises of when it successfully send/fails emails.
//      License: MIT

  angular.module('email', []).factory('$email', ['$http', function($http) {
      return { $send : function (api_user, api_key, to, toname, subject, text, from)
                  {
                          $scope.method = 'GET';
                          $scope.url = "https://api.sendgrid.com/api/mail.send.json?";
                          $http({method: $scope.method, url: $scope.url  + "api_user=" + api_user + 
                                                                           "&api_key=" + api_key + 
                                                                           "&to=" + to +
                                                                           "&subject=" + subject + 
                                                                           "&text=" + text + 
                                                                           "&from=" + from}).
                          success(function(data, status) {}).
                          error(function(data, status) {});   
                  }
            };
    }
  ]);
