const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async')

// const log = require('../runtime/log')



/**
 * @class models/user
 * @since 2.0.0
 * @description User
 */
var schema = Schema({
  user_id: String,
  username: String,
  /** @memberof models/user.prototype */
  password: { type: String, select: false },
  name: String, //
  gender: String,
  email: String,
  phone: String,
  birth_date: Date,
  education_level: Number, // 0: Pre-school 1:Primary School 2: Middle School 3: High School 4:College 5: Not educated
  address: String,
}, {
  timestamps: true
})

const GENDER_MALE = 'MALE'
const GENDER_FEMALE = 'FEMALE'
schema.statics.GENDER_MALE = GENDER_MALE
schema.statics.GENDER_FEMALE = GENDER_FEMALE


/*
// Validate duplicated
schema.pre('save', function (next) {
  const doc = this
  if (!doc.isNew) {
    const criteria = {}
    criteria._id = { $ne: doc._id }
    User.count(criteria, (err, count) => {
      if (count > 0) {
        next(new Error('该用户已存在'))
      } else {
        next()
      }
    })
  } else {
    next()
  }
})
*/


module.exports = mongoose.model('user', schema);