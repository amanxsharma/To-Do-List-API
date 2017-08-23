// writing the protocols to create our server.
// Using express to create the server 
// nodmon to keep track of changes to our application by watching changed files and automatically restart the server.

// 1) this code snippet below will start the server on 3000, can check by npm run start(since we added "start": "nodemon server.js" in package.json )
//or can run by node server.js
// var express = require('express'),
//   app = express(),
//   port = process.env.PORT || 3000;

// app.listen(port);

// console.log('todo list RESTful API server started on: ' + port);
//till here

// 2) this code below will connect all parts together
var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Task = require('./api/models/todoListModel'), //created model loading here
  bodyParser = require('body-parser');
  
// mongoose instance connection url connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/Tododb'); 


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());


var routes = require('./api/routes/todoListRoutes'); //importing route
routes(app); //register the route


app.listen(port);


console.log('todo list RESTful API server started on: ' + port);
//till here