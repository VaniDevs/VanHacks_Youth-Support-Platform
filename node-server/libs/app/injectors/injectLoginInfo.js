const async = require('async'),
    User = require('../../models/user')

module.exports = (req, res, next) => {
  async.parallel([
    next => {
      const ref = req.$session.getUserRef()
      if (ref) {
        User.findById(ref, (err, user) => {
          req.$injection.user = user
          next()
        })
      } else {
        next()
      }
    }
  ], next)
}