Emailster
=========

How do you go about collecting emails on your page? Why not use this process.... (I'd like to eventually make this an HTML tag you just import and bam you have a email form)


Additional Notes
=================
Using Sendgrid in your own app is easy now.

Simply reference email in your module:

     var app = angular.module('myapp', ['firebase', 'email']);

and then $email in your controller:

     function MyController($scope, $firebase, $email, $http, $log)
     
Finally send an email:

     $email.$send(api_user, api_key, to, name, "Click to Confirm", "This Please click on this link to confirm your email address: \n\n http://onaclovtech.com/apps/rockstar/" + String(ref.name()) + "\n\n", "tyson@onaclovtech.com");
               });
