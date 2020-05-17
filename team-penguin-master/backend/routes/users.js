var express = require('express');
var router = express.Router();
// var users = require('../models/users');

/* GET users listing. */
// router.get('/person/:id', function(req, res, next) {
//   let person = users.people.find(peep => {
//     return peep.id === parseInt(req.params.id);
//   });
//   res.render('users', {person});
// });

router.get('/person/:id', function(req, res, next) {
  let person = users.people.find(peep => {
    return peep.id === parseInt(req.params.id);
  });
  res.render('users', {person});
  console.log(req.url);
});

module.exports = router;
