var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var picSchema = new Schema({
  name: {
    type: String,
    required: true,
    unique: true
  },

  url: {
    type: String,
    required: true
  },
  rating: Number
});

var Pic = mongoose.model('Pic', picSchema);

module.exports = Pic;