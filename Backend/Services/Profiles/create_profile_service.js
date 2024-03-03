const service_error_handler = require("../../Abstraction/service_error_handler")
const create_user_profile = require("../../Functions/Profiles/create_profile")
const find_user_profile = require("../../Functions/Profiles/find_user_profile")
const update_user_profile = require("../../Functions/Profiles/update_user_profile")

const create_profile_service = service_error_handler(async (req, res) => {
  const profile_pic_url = req.profile_pic_url
  const { ...data } = req.body
  data.profile_pic_url = profile_pic_url
  const user_id = req.id
  const user_profile = await find_user_profile(user_id)
  if (!user_profile) {
    const result = await create_user_profile(data, user_id)
    const profile = await find_user_profile(user_id)
    const response = {
      data: profile[0],
      action: "create",
    }
    return response
  } else {
    const result = await update_user_profile(data, user_id)
    const profile = await find_user_profile(user_id)
    const response = {
      data: profile[0],
      action: "update",
    }
    return response
  }
})

module.exports = create_profile_service
