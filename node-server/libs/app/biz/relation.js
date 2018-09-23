const applyList = require('../../models/relationship/apply_list');
const mongoose = require('mongoose');

module.exports.registerActivity = {
  method: 'post',
  middlewares: [
    (req, res, next) => {
      if (!req.$injection.user) {
        next(new Error('User not logined'));
        return;
      }
      // if (req.$injection.user.type === 2) {
      //   next(new Error('Permission Deny'));
      //   return;
      // }
      next();
    },
    (req, res, next) => {
      const {programId} = req.body;
      applyList.findOne({
        programRef: mongoose.Types.ObjectId(programId),
        userRef: req.$injection.user._id,
      }, function (err, a) {
        if (a) {
          next(new Error('Already apply'));
        } else {
          next();
        }
      });
    },
    (req, res, next) => {
      const {programId} = req.body;
      const a = new applyList({
        programRef:mongoose.Types.ObjectId(programId),
        userRef: req.$injection.user._id,
      });
      a.save((err) => {
        if (err) {
          next(err);
        } else {
          res.$locals.writeData({
            apply_list: a
          });
          next();
        }
      })

    },
  ]
}

module.exports.checkRelation = {
  method: 'post',
  middlewares: [
    (req, res, next) => {
      if (!req.$injection.user) {
        next(new Error('User not logined'));
        return;
      }
      next();
    },
    (req, res, next) => {
      const {programId, userId} = req.body;
      applyList.findOne({
        programRef: mongoose.Types.ObjectId(programId),
        userRef: userId ? mongoose.Types.ObjectId(userId) : req.$injection.user._id,
      }, function (err, a) {
        if (err) {
          next(err);
        } else {
          res.$locals.writeData({
            apply_list: a
          });
          next();
        }
      });
    },
  ]
};