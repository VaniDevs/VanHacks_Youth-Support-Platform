const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async');

const schema = Schema({
  title: String,
  desc: String,
  gender: String,
}, {
  timestamps: true
});


const Resource = mongoose.model('resource', schema)
module.exports = Resource;