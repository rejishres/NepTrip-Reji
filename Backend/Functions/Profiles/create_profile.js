const connection = require("../../Models/connection")
const find_user_profile = require("./find_user_profile")
const update_user_profile = require("./update_user_profile")

const create_user_profile = async (data, user_id) => {
  const { full_name, phone, address, date_of_birth, gender, profile_pic_url } =
    data

  const insert_query = `INSERT INTO profiles(full_name,phone,address,date_of_birth, gender,profile_pic_url,user_id) VALUE(?,?,?,?,?,?,? )`
  return new Promise((resolve, reject) => {
    connection.query(
      insert_query,
      [
        full_name,
        phone,
        address,
        date_of_birth,
        gender,
        profile_pic_url,
        user_id,
      ],
      (err, result) => {
        if (err) {
          reject(err)
        } else {
          resolve({
            data: structuredClone(result),
            message: "Profile created successfully",
          })
        }
      }
    )
  })
}
module.exports = create_user_profile
