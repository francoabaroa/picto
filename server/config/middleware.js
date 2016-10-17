var morgan = require('morgan');
var bodyParser = require('body-parser');

// The water in this example is Express's `request` object, and the transformation
// is just a function passed to `app.use`. Any function passed into `app.use`
// will get run on every single request that your server receives

// Middleware is useful when you want to do something for every request
// that hits your server. Logging and parsing are two operations
// commonly found in a middleware stack.

module.exports = function (app, express) {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(bodyParser.json());
  app.use(express.static(__dirname + '/../client'));
};
