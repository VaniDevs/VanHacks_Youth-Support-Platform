const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async');

const schema = Schema({
  user_id: String, //reference to table user
  low_income: Number, // 1. Confirmed 2. Not confirmed
  school: String,
  field: Number, //1. Scholarship 2.Mentor 3. Council 4.Food 5.Health 6. Sport
}, {
  timestamps: true
});



module.exports = mongoose.model('teen', schema);