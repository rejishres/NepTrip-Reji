const connection = require("../../Models/connection")

const update_user_profile = (data, user_id) => {
  return new Promise((resolve, reject) => {
    const {
      full_name,
      phone,
      address,
      date_of_birth,
      gender,
      profile_pic_url,
    } = data
    const set_value = []
    if (full_name) set_value.push(`full_name='${full_name}'`)
    if (phone) set_value.push(`phone='${phone}'`)
    if (address) set_value.push(`address='${address}'`)
    if (date_of_birth) set_value.push(`date_of_birth='${date_of_birth}'`)
    if (gender) set_value.push(`gender='${gender}'`)
    if (profile_pic_url) set_value.push(`profile_pic_url='${profile_pic_url}'`)

    if (set_value.length === 0) {
      reject(new Error("No fields to update.", 400))
    }
    // console.log(set_value)
    const update_query = `UPDATE profiles SET ${set_value.join(
      ","
    )} WHERE user_id=${user_id}`
    // console.log(update_query)
    connection.query(update_query, (err, result) => {
      if (err) {
        reject(err)
      } else {
        resolve(structuredClone(result))
      }
    })
  })
}

module.exports = update_user_profile
