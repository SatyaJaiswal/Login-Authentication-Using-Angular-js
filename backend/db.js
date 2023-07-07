const mysql = require('mysql');
var conn = mysql.createConnection({
    host:"localhost",
    port: 3306,
    user:"root",
    password:"",
    database:"signup"
});
conn.connect(function(err){
    if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
    console.log("Connected!")
});
module.exports = conn;