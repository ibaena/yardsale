//DEPENDENCIES
var mongoose = require('mongoose');
var Schema = mongoose.Schema;


//SCHEMA
var userSchema = new Schema({
  name: String,
  shortname: String,
  reknown: String,
  bio: String
});

var User = mongoose.model('user', userSchema);

module.exports = User;
