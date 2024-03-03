class AppError extends Error {
  constructor(message, statuscode) {
    super()
    this.message = message
    this.statuscode = statuscode
  }
}

module.exports = AppError
