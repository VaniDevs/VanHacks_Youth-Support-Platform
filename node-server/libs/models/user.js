const mongoose = require('mongoose'),
    Schema = mongoose.Schema,
    async = require('async')

// const log = require('../runtime/log')



/**
 * @class models/user
 * @since 2.0.0
 * @description 用户
 */
var schema = Schema({
  username: String,
  /** @memberof models/user.prototype */
  password: { type: String, select: false },
  name: String, //
  gender: String,
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

const User = mongoose.model('user', schema)
module.exports = User