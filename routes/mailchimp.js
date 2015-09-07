var express = require('express');

var mcapi = require('../node_modules/mailchimp-api/mailchimp');


// set MailChimp API key here
mc = new mcapi.Mailchimp('e7255bc0914e2a920b91a9e8faa00a4d-us3');


/*
 * POST subscribe an email to a list.
 */

exports.subscribe = function(req, res){
  mc.lists.subscribe({id: '618afbced4', email:{email:req.params.email}}, function(data) {
      // req.session.success_flash = 'User subscribed successfully! Look for the confirmation email.';
      // res.redirect('/lists/'+req.params.id);
      res.json(
        {
          "success": true,
          "message": "User registered"
        }
      );

    },
    function(error) {
      if (error.error) {
         res.json(
           {
            "success": false,
            "message": "",
            "error": {
              "code": error.code,
              "message": error.error
            }
          }
          );
      } else {
         res.json('There was an error subscribing that user');
      }
    });
};
