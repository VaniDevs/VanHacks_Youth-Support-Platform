const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async');

const schema = Schema({
  programRef: {type: mongoose.Schema.Types.ObjectId, ref: 'program'}, //reference to program
  userRef: {type: mongoose.Schema.Types.ObjectId, ref: 'user'}, //refrence to table teen
  result: Number, //0.Waiting for process 1. Confirmed 2. Declined
  type: Number    // 0 teen, 1 volunteer
}, {
  timestamps: true
});



module.exports = mongoose.model('apply_list', schema);