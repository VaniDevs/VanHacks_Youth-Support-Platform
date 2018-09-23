const express = require('express'),
    async = require('async'),
    _ = require('lodash'),
    // UAParser = require('ua-parser-js'),
    parseurl = require('parseurl')

const config = require('../config'),
    db = require('../runtime/db')
    // log = require('../runtime/log'),
    // logger = log.byCategory('api-trace')

module.exports.bootstrap = (next) => {
  console.log('bootstrap');
  const app = express()

  _vendorMiddlewares(app)
  _appMiddlewares(app)
  _biz(app)
  _rest(app)
  _errHandler(app)
  // Listen
  app.listen(config.app.port)

  next()
}

const _vendorMiddlewares = app => {
  const connect = require('connect'),
      cors = require('cors'),
      cookieParser = require('cookie-parser'),
      session = require('express-session'),
      MongoStore = require('connect-mongo')(session),
      // sessionMongoose = require('session-mongoose'),
      bodyParser = require('body-parser'),
      responseTime = require('response-time'),
      methodOverride = require('method-override')

  // Log response time
  app.use(responseTime())
  app.use(cors({
    origin: true,
    credentials: true
  }))

  // Lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it.
  app.use(methodOverride())
  // Cookie parser
  app.use(cookieParser(config.app.cookieSecret))
  // Session
  app.use(session({
    secret: config.app.sessionSecret,
    cookie: {
      maxAge: 365 * 24 * 60 * 60 * 1000
    },
    resave: false,
    saveUninitialized: false,
    store: new MongoStore({
      url: db.url,
      ttl: 365 * 24 * 60 * 60 // = 365 days
    })
  }));
  // Body parser
  app.use((req, res, next) => {
    next()
  })
  app.use(bodyParser.json({
    limit: '50mb'
  }))
  app.use(bodyParser.urlencoded({
    limit: '50mb',
    extended: true
  }))
  // Disable cache by default
  app.use((req, res, next) => {
    res.header('Cache-Control', 'no-cache, no-store, must-revalidate')
    next()
  })
}

const _appMiddlewares = app => {
  // inject accessors
  const SessionAccessor = require('./accessors/SessionAccessor'),
      LocalsAccessor = require('./accessors/LocalsAccessor')
  app.use((req, res, next) => {
    // Log
    let url = req.url.split('?')[0]
    // logger.info(`in ${req.method} ${url}`, {
    //   method: req.method,
    //   url,
    //   headers: req.headers,
    //   ua: new UAParser().setUA(req.headers['user-agent']).getResult(),
    //   query: req.query,
    //   body: req.body,
    //   ip: req.header('X-Real-IP') || req.connection.remoteAddress,
    //   session: req.session
    // })
    next()
  })
  app.use(function (req, res, next) {
    // Refresh session
    if (!req.session.views) {
      req.session.views = {}
    }
    // get the url pathname
    var pathname = parseurl(req).pathname
    // count the views
    req.session.views[pathname] = (req.session.views[pathname] || 0) + 1

    next()
  })
  app.use((req, res, next) => {
    // Prepare output
    req.$injection = {}
    req.session = req.session || {}
    req.$session = new SessionAccessor(req)
    res.locals = {}
    res.$locals = new LocalsAccessor(res.locals)
    next()
  })
  // injectLoginInfo
  app.use(require('./injectors/injectLoginInfo'))
  // Validate ip
  // app.use(require('./validators/validateIp'))
}

const _biz = app => {
  const router = express.Router()
  const biz = require('./biz')

  const output = (req, res) => {
    res.json(res.$locals.getData())
  }
  for (let categoryName in biz) {
    const category = biz[categoryName]
    for (let apiName in category) {
      const api = category[apiName]
      router[api.method](`/${categoryName}/${apiName}${api.wildcard ? '/*' : ''}`, api.middlewares, api.output || output)
    }
  };

  app.use('/services/biz', router)
}

const _rest = app => {
  const restify = require('express-restify-mongoose')

  const router = express.Router()
  restify.defaults({
    prefix: '/rest',
    version: '',
    lean: false,
    // Whether to use .findOneAndUpdate() or .findById() and then .save(), allowing document middleware to be called. For more information regarding mongoose middleware, read the docs.
    findOneAndUpdate: false,
    findOneAndRemove: false
  })

  const rest = require('./rest')
  for (var categoryName in rest) {
    var category = rest[categoryName]
    category.options = category.options || {}
    category.options.name = category.options.name || categoryName
    restify.serve(router, category.model, category.options)
  };
  app.use('/services', router)
}

const _errHandler = (app) => {
  app.use((err, req, res, next) => {
    const json = { message: err.message }
    if (err instanceof Error) {
      json.message = err.message
      if (!config.prod) {
        json.stacks = err.stack.split('\n')
      }
    } else {
      json.message = err
    }
    // Log
    // logger.info(`err ${req.method} ${req.url}`, {
    //   method: req.method,
    //   url: req.url,
    //   headers: req.headers,
    //   query: req.query,
    //   body: req.body,
    //   ip: req.header('X-Real-IP') || req.connection.remoteAddress,
    //   session: req.session,
    //   err: json
    // })
    res.json({ err: json })
  })
}