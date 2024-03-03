const service_error_handler = (service) => async (req, res) => {
  try {
    const result = await service(req, res)
    return result
  } catch (error) {
    console.error("Service Error:", error)
    throw error
  }
}

module.exports = service_error_handler
