const AppError = require("../../Error/custom_app_error")
const connection = require("../../Models/connection")

const find_user = (email) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM users WHERE email=?`,
      [email],
      (err, result) => {
        if (err) {
          reject(err)
        } else {
          // console.log(structuredClone(result))

          // if (structuredClone(result).length == 0) {
          //   reject(new AppError("No user found ", 401))
          // } else {
          resolve(structuredClone(result))
          // }
        }
      }
    )
  })
}

module.exports = find_user
