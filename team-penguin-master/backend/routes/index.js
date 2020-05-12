var express = require('express');
var router = express.Router();

// Checking against an Array
let descriptions = ['rent', 'car payment', 'loan', 'retirement plan', 'phone service'];

router.get('/', function(req, res){
  res.render('index', {title0: 'Budget-Practice'});
});

router.post('/', function(req, res, next){
  let bodyDescription = req.body;
  if (descriptions.includes(bodyDescription.description)){
    res.send('Already have ' + bodyDescription.description + ', thanks.')
  }
  else {
    descriptions.push(bodyDescription.description);
    res.send(descriptions);

    // If you have descriptions.hbs
    // res.render("descriptions", descriptions);
  }
});

// Render the index.hbs 
// router.get('/', function(req, res, next) {
//   res.render('index', { title1: 'Beetles', users: ['John', 'Paul', 'George', 'Ringgo'], 
//     title2: 'My Bikes',
//     bikes: [
//       {type: 'DJ', purpose: 'jumping'},
//       {type: 'Downhill', purpose: 'rock gardens'},
//       {type: 'Enduro', purpose: 'uphill and downhill riding'},
//       {type: 'All-Mountain', purpose: 'trail-riding'}
//     ]
//   });
// });

// SEND a particular string back
// Get Request (Read)
// router.get('/', function(req,res){
//   res.send('You successfully create a GET route!');
// });

// Post Request (Create)
// router.post('/', function(req, res, next){
//   res.send('You successfully created a POST route!');
// });

// Put Request (Update)
// router.put('/', function(req, res, next){
//   res.send('You successfully created a PUT route!');
// });

// Delete Request (Delete)
// router.delete('/', function(req, res, next){
//   res.send('You successfully created a DELETE route!');
// });

// Checking for Username availability

// let descriptions = ['rent', 'car payment', 'loan', 'retirement plan', 'phone service'];

// router.get('/', function(req, res){
//   let queryAnimal = req.query.animal;
//   if (animals.includes(queryAnimal)) {
//     res.send("Yep, we have a " + queryAnimal + "!");
//   }
//   else {
//     res.send("Nope, no " + queryAnimal + " here.");
//   }

//   res.render('index');
// });
// URL: localhost:3000?animal=pig

// Request (query). Define Parameters in URL.
// Whatever name you define within the URL, it will be set to a variable named queryName.
// Username validity
// router.get('/', function(req,res){
//   let queryName = req.query.name;
//   if (queryName) {
//     res.send("Welcome to the page, " + queryName + "!");
//   }
//   else {
//     res.send("Sad, no one is here!");
//   }
// });

// To test this out, in Postman, change the type of route to be GET and the URL to look like: localhost:3000?name=Ted
// If you return to just localhost:3000 within the URL, you should see the response Sad, no one is here!.

module.exports = router;
