const fs = require('fs'),
    path = require('path')

const _ = require('lodash')
const moment = require('moment')

const _mkdir = path => {
  try {
    fs.mkdirSync(path)
  } catch (err) {
  }
  return path
}

const PLACE_HOLDER = 'place_holder'

module.exports = (function (prod) {
  let dbServer = '108.61.194.232'
  let protocal = 'http'
  let apiServer = 'dev.charmdeer.com'
  let mappServer = 'dev-m-app.charmdeer.com'

  var config = {
    prod: prod,
    root: __dirname,
    // db
    db: {
      url: dbServer,
      port: 30002,
      schema: 'vanhacks',
      user: 'vanhackAdmin2',
      password: 'vanhackAdmin123',
      poolSize: 25
    },
    //// log
    // log: {
    //   db: {
    //     url: dbServer,
    //     port: 27017,
    //     schema: 'vanhackslog',
    //     user: 'vanhackslog',
    //     password: 'vanhackslog',
    //     // In some env poolSize must set to 1 to workaround with https://github.com/nodejs/node/issues/7776
    //     poolSize: 5
    //   }
    // },
    // Express server
    app: {
      port: 30001,
      cookieSecret: 'cookieSecret',
      sessionSecret: 'sessionSecret'
    },

    // upload: {
    //   dir: _mkdir(path.join(__dirname, '../tmp-uploads'))
    // },
  }
  return config
})(
    false
)