const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async')

/**
 * @class models/user
 * @since 2.0.0
 * @description User
 */
var schema = Schema({
  username: String,
  /** @memberof models/user.prototype */
  password: { type: String, select: false },
  name: String, //
  email: String,
  phone: String,
  birth_date: Date,
  address: String,
  type: Number, // 0 teen, 1 volunteer, 2 org
  teenInfo: {
    gender: Number, // 0 MALE, 1 FEMALE
    education_level: Number, // 0: Pre-school 1:Primary School 2: Middle School 3: High School 4:College 5: Not educated
    low_income: Number, // 1. Confirmed 2. Not confirmed
    school: String,
    field: Number, //1. Scholarship 2.Mentor 3. Council 4.Food 5.Health 6. Sport
  },
  volunteerInfo: {
    gender: Number,
    education_level: Number, // 0: Pre-school 1:Primary School 2: Middle School 3: High School 4:College 5: Not educated
    field:[Number], // 1. Administration/office work 2. Coaching/mentoring 3. Technical 4. Counselling/Listening 5. Events/Stewarding
    available:[Object],
  },
  organizationInfo: {
    if_registered: Boolean,
    location: String,
    web: String,
  }
}, {
  timestamps: true
});


module.exports = mongoose.model('user', schema);