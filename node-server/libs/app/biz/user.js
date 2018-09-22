const User = require('../../models/user')

module.exports.get = {
  method: 'get',
  middlewares: [
    (req, res, next) => {
      // User.populate(req.$injection.user, 'levelRef', next)
      next()
    },
    (req, res, next) => {
      if (req.$injection.user) {
        res.$locals.writeData({
          user: req.$injection.user
        })
        next()
      } else {
        next(new Error('User not logined'))
      }

    }
  ]
};

module.exports.login = {
  method: 'post',
  middlewares: [
    (req, res, next) => {
      const {username, password} = req.body
      User.findOne({username, password}).exec((err, user) => {
        if (user) {
          res.$locals.writeData({user})
          req.$session.setUser(user)
          next()
        } else {
          next(new Error('Username or password is incorrect'))
        }
      });
    }
  ]
}

module.exports.register = {
  method: 'post',
  middlewares: [
    (req, res, next) => {
      const {username, password} = req.body
      User.findOne({username}).exec((err, user) => {
        if (user) {
          next(new Error('Username has already been registered'))
        } else {
          user = new User({
            username,
            password,
          })
          req.$injection.user = user;
          user.save(next)
        }
      });
    },
    (req, res, next) => {
      const user = req.$injection.user
      res.$locals.writeData({user})
      req.$session.setUser(user)
      next()
    }
  ]
};

module.exports.logout = {
  method: 'post',
  middlewares: [
    (req, res, next) => {
      req.$session.clearUser()
      next()
    }
  ]
}