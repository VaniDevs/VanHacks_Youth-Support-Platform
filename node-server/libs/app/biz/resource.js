const Resource = require('../../models/resource');

module.exports.search = {
  method: 'get',
  middlewares: [
    (req, res, next) => {
      res.$locals.writeData({
        resources: [
          {test: "test"}
        ]
      });
      next()
    },
  ]
};