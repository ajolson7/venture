const express = require('express');
const mysql = require('mysql');

let app = express();
let connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'nodeWebServer'
});

app.get('/', (req, res) => {
  // connection.connect((err) => {
  //     if (err) {
  //         console.log('err:', err);
  //     }
  //
  //     // var sqlQuery = "CREATE TABLE "
  //
  //     connection.query("CREATE TABLE people (name VARCHAR(255), address VARCHAR(255), phone_number VARCHAR(20))", (error, results, fields) => {
  //         console.log('error:', error);
  //         console.log('results:', results);
  //         console.log('fields:', fields);
  //     })
  // });

  res.render('home.hbs', {
    pageTitle: 'Test Home API Call',
    welcomeMessage: 'Welcome!',
    currentYear: new Date().getFullYear()
  });
});

app.get('/users', (req, res) => {

  connection.connect((err) => {
    if (err) {
      console.log('err:', err);
    }

    let sqlQuery = "SELECT * FROM people";

    connection.query(sqlQuery, (err, result, fields) => {
      if (err) {
        console.log('second err:', err);
      }

      res.render('users.hbs', {
        pageTitle: 'Got Users',
        welcomeMessage: 'Welcome to the users page!',
        currentYear: new Date().getFullYear(),
        users: result
      });
    });
  });
});

app.listen('3000', () => {
  console.log('Server is running on port 3000');
});
