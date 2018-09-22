const runtime = require('./runtime'),
    app = require('./app')
    // schedulers = require('./schedulers')

// process.on('uncaughtException', function (e) {
//   /*处理异常*/
//   console.log(e.message)
// });

runtime.init(() => {

  // var logger = require('./runtime/log').byJs(__filename)
  console.log('runtime init complete.')

  app.bootstrap(() => {

    console.log('=> app bootstrap complete.')
  })
  // schedulers.bootstrap(() => {
  //   logger.info('=> schedulers bootstrap complete.')
  // })
})