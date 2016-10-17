var Pic = require('./picModel.js');
var Q = require('q');

// Promisify a few mongoose methods with the `q` promise library
var findPic = Q.nbind(Pic.findOne, Pic);
var createPic = Q.nbind(Pic.create, Pic);
var findAllPics = Q.nbind(Pic.find, Pic);

module.exports = {
  newPic: function (req, res, next) {
    var url = req.body.url;
    var name = req.body.name;
    var rating = req.body.rating;
    console.log('in new PICS!!');
    console.log('req.body: ', req.body);
    createPic({name: name, url: url, rating: rating})
    .then(function (pic) {
      if (pic) {
        res.json(pic);
      }
    })
    .fail(function (err) {
      next(err);
    })
  }
};