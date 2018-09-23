const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async');

const schema = Schema({
  org_ID: String,
  org_name: String,
  if_registered: Boolean,
  location: String,
  web: String,
  phone: String,
  email: String,
  contact: [String], //reference to user

}, {
  timestamps: true
});



module.exports = mongoose.model('organization', schema);