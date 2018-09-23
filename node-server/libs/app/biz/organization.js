
const Program = require('../../models/entities/program')

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
      const p = new Program(info);
      req.$injection.program = p;
      p.save(next);
    },
    (req, res, next) => {
      const program = req.$injection.program;
      res.$locals.writeData({program});
      // TODO send email notification
      next()
    }
  ]
};