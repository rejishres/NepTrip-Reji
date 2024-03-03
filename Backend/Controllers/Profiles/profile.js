const controller_error_handler = require("../../Abstraction/controller_error_handler")
const create_profile_service = require("../../Services/Profiles/create_profile_service")
const update_profile_service = require("../../Services/Profiles/update_profile_service")
const view_profile_service = require("../../Services/Profiles/view_profile_service")

const view_profile = controller_error_handler(async (req, res, next) => {
  const result = await view_profile_service(req, res)
  res.status(200).json({
    responseType: `Success`,
    message: `Profile for ${req.email}`,
    result,
  })
})

const create_profile = controller_error_handler(async (req, res, next) => {
  const result = await create_profile_service(req, res)
  let message
  if (result.action == "update") {
    message = `Profile updated successfully for ${req.email}`
  } else {
    message = `Profile Created successfully for ${req.email}`
  }
  res.status(200).json({
    responseType: `Success`,
    message,
    result,
  })
})

const update_profile = controller_error_handler(async (req, res, next) => {
  const result = await update_profile_service(req, res)
  res.status(200).json({
    responseType: `Success`,
    message: `Profile updated successfully for  ${req.email}`,
    result,
  })
})

module.exports = { view_profile, create_profile, update_profile }
