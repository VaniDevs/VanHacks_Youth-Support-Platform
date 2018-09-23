const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async');

const schema = Schema({
  prog_ID: String, //reference to program
  user_id: String, //refrence to table teen
  time: Date,
  result: Number // 1. Confirmed 2. Declined 3.Waiting for process
}, {
  timestamps: true
});



module.exports = mongoose.model('volunteer_apply_list', schema);