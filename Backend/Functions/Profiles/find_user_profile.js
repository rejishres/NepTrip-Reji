const AppError = require("../../Error/custom_app_error")
const connection = require("../../Models/connection")

const find_user_profile = (user_id) => {
  return new Promise((resolve, reject) => {
    connection.query(
      `SELECT * FROM profiles where user_id=?`,
      [user_id],
      (err, result) => {
        if (err) {
          reject(err)
        } else {
          if (structuredClone(result).length == 0) {
            resolve(false)
          } else {
            resolve(structuredClone(result))
          }
        }
      }
    )
  })
}
module.exports = find_user_profile
