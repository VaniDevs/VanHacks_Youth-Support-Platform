
const Program = require('../../models/entities/program')
const emailHelper = require('../../utility/emailHelper')
const User = require('../../models/entities/user')


module.exports.addProgram = {
  method: 'post',
  middlewares: [
    (req, res, next) => {
      if (!req.$injection.user) {
        next(new Error('User not logined'));
        return;
      }
      if (req.$injection.user.type !== 2) {
        next(new Error('User is not an organization'));
        return;
      }
      next();
    },
    (req, res, next) => {
      const info = req.body;
      info.orgRef = req.$injection.user._id;
      const p = new Program(info);
      req.$injection.program = p;
      p.save(next);
    },
    (req, res, next) => {
      const program = req.$injection.program;
      res.$locals.writeData({program});
      const targetField = program.field;

      User.find({
        type: 0,
        'teenInfo.field': 0,
      }, function (err, us) {
        const a = us.filter((u)=>{
          return u.email;
        }).map((u)=>{
          return {
            mails: u.email,
            name: u.name || u.username
          }
        });
        console.log(us);
        console.log(us);
        emailHelper.sendTeenNotification(a, `<a href=http://localhost:3000/#/program/detail/${program._id}>${program.name}</a>`);
      });
      next()
    }
  ]
};