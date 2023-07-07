const express = require ('express');
const app = express ();
const cors = require('cors');
var loginrouter = require('./routs.js/login')
app.use(cors(
    {
      origin: "http://localhost:4200"
    }
   
  ));
app.use(express.json());
// app.get ('' ,(req , resp)=>{
//     // console.log('Data send by browser', req.query.name)
//     resp.send ('<h1>Hello , this is the home page</h1>');
//     ` <input type = "text"  placeholder= "user name" />`
    
// });
app.use('/',loginrouter );



// app.get ('/about' ,(req , resp)=>{
//     resp.send ('Hello , this is the about page');
// });
app.listen(3000);
