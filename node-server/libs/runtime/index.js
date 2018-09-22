// Init runtime: db connetion, logger, wechat api
const async = require('async')

const db = require('./db')
    // log = require('./log'),

module.exports.init = (next) => {
  db.init((err)=>{
    next()
  })
}