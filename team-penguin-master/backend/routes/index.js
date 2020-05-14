var express = require('express');
var router = express.Router();
var users = require('../models/users');
var mysql = require('mysql2');

//Connect MySQL to Express
var mysql = require('mysql');

var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'Password1!',
  database: 'budgetapp',
});

connection.connect(
  function(err){
    if (err){
      console.error(err.message);
    }
    console.log('Yay! You are connected to the database!');
  }
)

router.get('/', function(req, res){
  res.render('index', {title0: 'Budgeteer'});

  Response.set('Content-Type', 'text/html');
});

router.get('/person/:id', function(req, res, next) {
  let person = users.people.find(peep => {
    return peep.id === parseInt(req.params.id);
  });
  res.render('index', {person});
});

// Checking against an Array
let descriptions = ['rent', 'car payment', 'loan', 'retirement plan', 'phone service'];

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

  // Post Description and Amount
  // console.log(req.body);
  // const newTransaction = {
  //   type: req.body.type,
  //   description: req.body.description,
  //   amount: req.body.amount
  // };

  // const selectTransaction = `SELECT * 
  // FROM budgetapp 
  // WHERE description = '${newTransaction.amount}'
  // AND amount = '${newTransaction.description}'`;

  // connection.query(selectTransaction, function(err, result){
  //   let newTransactionQuery = `INSERT INTO actor(description, amount)
  //   VALUES('${newTransaction.amount}', '${newTransaction.description}')`;

  //   connection.query(newTransactionQuery, function(err, insertResult) {
  //     if (err) {
  //       res.render('error', {message: 'Oops, something went wrong'});
  //     } else {
  //       res.redirect('/');
  //     }
  //     });

  });


let amount = ['1500', '250', '200', '200', '90'];

router.post('/', function(req, res, next){
  let bodyAmount = req.amount;
  if (descriptions.includes(bodyAmount.amount)){
    res.send('Already have ' + bodyAmount.amount + ', thanks.')
  }
  else {
    descriptions.push(bodyAmount.amount);
    res.send(amount);

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
