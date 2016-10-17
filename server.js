var express = require('express');
var mongoose = require('mongoose');
var morgan = require('morgan');
var bodyParser = require('body-parser');
var picController = require('./server/pictures/picController.js');
var path = require('path');
var app = express();
app.set('port', 4568);
// connect to mongo database named "shortly"
mongoose.connect('mongodb://localhost/picto');

// configure our server with all the middleware and routing
// require('./config/middleware.js')(app, express);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use('/', express.static(path.join(__dirname, 'client')));

// require('./config/routes.js')(app, express);


// app.get('/')

// app.post('/pics', function (req, res) {
//   picController.newPic(req, res, function () {

//   });
//   console.log('req.body: ', req.body);
//   req.status(200).send('hello world');
// });

app.post('/pics', picController.newPic);

// start listening to requests on port 8000
console.log('picto is listening on 4568');
app.listen(4568);

// export our app for testing and flexibility, required by index.js
module.exports = app;

