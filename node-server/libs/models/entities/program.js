const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async');

const schema = Schema({
  name: String,
  desc: String,
  location: String,
  geo: {
    latitude: Number,
    longitude: Number,
  },
  deadline: Date,
  orgRef: {type: mongoose.Schema.Types.ObjectId, ref: 'user'},
  position_teen: Number,
  position_volunteer:Number, //If 0, means don't need volunteer for this program
  contact: {
    name: String,
    phone: String,
  },
  field: Number, //1. Scholarship 2.Mentor 3. Council 4.Food 5.Health 6.Sport
}, {
  timestamps: true
});


module.exports = mongoose.model('program', schema);