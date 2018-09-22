const mongoose = require('mongoose'),
    async = require('async')

mongoose.Promise = Promise

const config = require('../config')

module.exports.init = function (next) {

  const db = config.db,
      url = `mongodb://${db.user}:${db.password}@${db.url}:${db.port}/${db.schema}`
  module.exports.url = url

  mongoose.connect(url, {
    server: {
      poolSize: db.poolSize,
      socketOptions: {
        keepAlive: 256
      }
    }
  }, function (err) {
  })

  next();

}