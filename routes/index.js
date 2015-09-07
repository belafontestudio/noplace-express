var express = require('express');
var router = express.Router();

Instagram = require('instagram-node-lib');

Instagram.set('client_id', '9e636d14946745eab4a5e91e2d53054c');
Instagram.set('client_secret', '786e44b851954931a1faed247ba36444');
Instagram.set('access_token', '294322778.5b9e1e6.805cb55b73d847e2be4e6ce899221464');
/* GET home page. */

router.get('/', function(req, res) {
  Instagram.users.recent({
    user_id: 294322778,
    complete: function(data, pagination){
      // data is a javascript object/array/null matching that shipped Instagram
      // when available (mostly /recent), pagination is a javascript object with the pagination information
      //console.log(data, pagination);
      res.locals.instagrams = data;
      res.render('index');
    },
    error: function(errorMessage, errorObject, caller){
      console.log(errorMessage, errorObject, caller);
      res.render('index');
      // errorMessage is the raised error message
      // errorObject is either the object that caused the issue, or the nearest neighbor
      // caller is the method in which the error occurred
    }});

});



module.exports = router;
