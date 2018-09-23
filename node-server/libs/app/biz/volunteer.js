
module.exports.registerActivity = {
  method: 'post',
  middlewares: [
    (req, res, next) => {
      // TODO verify Permission
      const info = req.body
      // TODO
    }
  ]
}