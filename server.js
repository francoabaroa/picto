var express = require('express');
var mongoose = require('mongoose');
var app = express();
var morgan = require('morgan');
var bodyParser = require('body-parser');

// connect to mongo database named "shortly"
mongoose.connect('mongodb://localhost/picto');

// // configure our server with all the middleware and routing
// require('./config/middleware.js')(app, express);
// require('./config/routes.js')(app, express);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/../client'));


app.get('/', function (req, res) {
  // console.log('REQ', req, 'RES',res);
  res.send('hello world');
});


// start listening to requests on port 8000
console.log('picto is listening on 8000');
app.listen(8000);

// export our app for testing and flexibility, required by index.js
module.exports = app;
