const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async');

const schema = Schema({
  user_id: String, //reference to table user
  field:[number], // 1. Administration/office work 2. Coaching/mentoring 3. Technical 4. Counselling/Listening 5. Events/Stewarding
  available:[Object],
}, {
  timestamps: true
});



module.exports = mongoose.model('volunteer', schema);