const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async');

const schema = Schema({
  prog_ID: String,
  prog_name: String,
  desc: String,
  location: String,
  deadline:Date,
  org_ID: String, //foreign key to table organization
  position_teen: Number,
  position_volunteer:Number, //If 0, means don't need volunteer for this program
  contact: String, //reference to table user
}, {
  timestamps: true
});


module.exports = mongoose.model('program', schema);