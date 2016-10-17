var express = require('express');
var mongoose = require('mongoose');
var app = express();

// connect to mongo database named "shortly"
var db = mongoose.connect('mongodb://localhost/picto');

db.once('open', function() {
  console.log('DATABASE CONNECTED');
});


// configure our server with all the middleware and routing
require('./config/middleware.js')(app, express);
require('./config/routes.js')(app, express);

// start listening to requests on port 8000
app.listen(8000);

// export our app for testing and flexibility, required by index.js
module.exports = app;
