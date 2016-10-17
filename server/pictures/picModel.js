var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var picSchema = new Schema({
  name: String,
  url: String,
  rating: Number
});

var Pic = mongoose.model('Pic', picSchema);