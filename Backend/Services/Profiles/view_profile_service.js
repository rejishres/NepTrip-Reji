const service_error_handler = require("../../Abstraction/service_error_handler")
const AppError = require("../../Error/custom_app_error")
const find_user_profile = require("../../Functions/Profiles/find_user_profile")

const view_profile_service = service_error_handler(async (req, res) => {
  const user_id = req.id
  const user_profile = await find_user_profile(user_id)
  if (!user_profile) {
    throw new AppError("No profile found for the user", 400)
  } else {
    const response_data = {
      data: user_profile[0],
      action: "update",
    }
    return response_data
  }
})

module.exports = view_profile_service
