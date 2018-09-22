const ReqSessionAccessor = module.exports = function (req) {
  this.session = req.session
  this.client = req.header('charmdeer-client')

  this.asStaff = true
  this.asUser = true

  if (this.client === 'admin' || this.client === 'm-admin' || this.client === 'v-admin') {
    this.asUser = false
  }
  if (this.client === 'app' || this.client === 'm-app' || this.client === 'v-app') {
    this.asStaff = false
  }
}

ReqSessionAccessor.prototype.setStaff = function (staff) {
  this.session.loginStaffRef = staff.id
  if (this.client === 'admin' || this.client === 'v-admin') {
    this.session.cookie.maxAge = 2 * 60 * 60 * 1000 // 2 hours for staff
  }
}

ReqSessionAccessor.prototype.getStaffRef = function (ref) {
  if (this.session.loginStaffRef && this.asStaff) {
    if (this.client === 'admin' || this.client === 'v-admin') {
      this.session.cookie.maxAge = 2 * 60 * 60 * 1000 // 2 hours for staff
    }
    return this.session.loginStaffRef
  }
}

ReqSessionAccessor.prototype.clearStaff = function (ref) {
  delete this.session.loginStaffRef
}

ReqSessionAccessor.prototype.setUser = function (user) {
  this.session.loginUserRef = user.id
}

ReqSessionAccessor.prototype.getUserRef = function (ref) {
  if (this.asUser) {
    return this.session.loginUserRef
  }
}

ReqSessionAccessor.prototype.clearUser = function (ref) {
  delete this.session.loginUserRef
}

ReqSessionAccessor.prototype.addSmsCaptcha = function (code, purpose, expiredAt) {
  this.session.smsCaptchas = this.session.smsCaptchas || []
  this.session.smsCaptchas.push({ code, purpose, expiredAt })
}

ReqSessionAccessor.prototype.getSmsCaptchas = function (purpose) {
  this.session.smsCaptchas = this.session.smsCaptchas || []
  return this.session.smsCaptchas.filter(code => {
    return code.purpose === purpose
  })
}

ReqSessionAccessor.prototype.clearSmsCaptcha = function (purpose) {
  this.session.smsCaptchas = this.session.smsCaptchas || []
  this.session.smsCaptchas = this.session.smsCaptchas.filter(code => {
    return code.purpose !== purpose
  })
  if (this.session.smsCaptchas.length === 0) {
    delete this.session.smsCaptchas
  }
}