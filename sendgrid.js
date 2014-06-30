// This doesn't currently work at all, but all are welcome to assist.
//(the send function when used in an actual controller WAS working, but let's make it an injectible service)
// I'm trying to mimic how Firebases 
// https://cdn.firebase.com/libs/angularfire/0.6.0/angularfire.js
// does it, mostly because I don't really know how to do it, and this was my first thought to create a "service" that can be
// interchanged depending on the provider. All it requires to provide (right now) is the send function, 
// along with the correct matching parameters (and order).

"use strict";
(function () {
angular.module("email", []).value("Email", Email);

angular.module("email").factory('$email', ['$http', function($http){
   
   // how do we return the "function" email?
   function send(api_user, api_key, to, toname, subject, text, from)
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

}]);

};
