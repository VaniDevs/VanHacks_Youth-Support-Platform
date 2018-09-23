


module.exports.addProgram = {
  method: 'post',
  middlewares: [
    (req, res, next) => {
      // TODO verify user is organization
      const info = req.body
      // TODO
    }
  ]
}