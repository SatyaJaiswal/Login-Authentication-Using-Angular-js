var express = require("express");
var router = express.Router();
var db = require('../db')
// let username = "prince";
// let password = "prince123"

/*  users listing. */
router.post("/", async function (req, res) {
  let username = req.body.username;
  let password = req.body.password;

  console.log(username, password);

  // check user exist for this email into the database
  if (username && password) {
    // Execute SQL query that'll select the account from the database based on the specified username and password

    db.query('SELECT * FROM login WHERE username = ? AND password = ?', [username, password], function (error, results, fields) {
      // If there is an issue with the query, output the error
      if (error) {
        throw error;
      } else {
        if (results.length > 0) {
          // request.session.userinfo = results.user_id;
        //   res.redirect('/home');
        //   console.log(results);
        //   console.log(results.length)
        //   console.log(results.length > 0)
        console.log("login succsesfully")
        } else {
          res.send('username or password in valid')
        }

      }
    });

  } else {
    res.send('Please enter Username and Password I am outside!');
    res.end();
  }

});

module.exports = router;