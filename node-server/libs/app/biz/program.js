const Program = require('../../models/entities/program');
const mongoose = require('mongoose');

module.exports.search = {
  method: 'get',
  middlewares: [
    (req, res, next) => {
      Program.find((err, r)=>{
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
        _id : mongoose.Types.ObjectId(id)
      }, (err, r)=>{
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
      const {title, description} = req.body
      //TODO added by
      const resource = new Program({
        title,
        description,
      });
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