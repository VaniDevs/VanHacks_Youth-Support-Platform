const Program = require('../../models/entities/program');
const mongoose = require('mongoose');

module.exports.search = {
  method: 'get',
  middlewares: [
    (req, res, next) => {
      Program.find((err, r) => {
        if (err) {
          next(err);
        } else {
          res.$locals.writeData({
            programs: r
          });
          next();
        }
      })
    },
  ]
};

module.exports.queryOne = {
  method: 'get',
  middlewares: [
    (req, res, next) => {
      const {id} = req.query;

      Program.findOne({
        _id: mongoose.Types.ObjectId(id)
      }, (err, r) => {
        if (err) {
          next(err);
        } else {
          res.$locals.writeData({
            program: r
          });
          next();
        }
      })
    },
  ]
}

module.exports.add = {
  method: 'post',
  middlewares: [
    (req, res, next) => {
      if (!req.$injection.user) {
        next(new Error('User not logined'));
        return;
      }
      // TODO verify organization
      next();
    },
    (req, res, next) => {
      const info = req.body;
      info.orgRef = req.$injection.user._id;
      //TODO added by
      const resource = new Program(info);
      req.$injection.resource = resource;
      resource.save(next)
    },
    (req, res, next) => {
      const resource = req.$injection.resource
      res.$locals.writeData({resource})
      next()
    }
  ]
};

module.exports.queryMy = {
  method: 'get',
  middlewares: [
    (req, res, next) => {
      if (!req.$injection.user) {
        next(new Error('User not logined'));
        return;
      }
      // TODO verify organization
      next();
    },
    (req, res, next) => {
      const userId = req.$injection.user._id;
      Program.find({
        orgRef: mongoose.Types.ObjectId(userId)
      }, (err, re) => {
        if (err) {
          next(err);
        } else {
          res.$locals.writeData({
            programs: re
          });
          next();
        }
      })
    }
  ]
}