const controller_error_handler = (controller) => async (req, res, next) => {
  try {
    const result = await controller(req, res, next)
    // if (result instanceof Promise) {
    //   console.log(`error is instance of Promise`)
    //   await result.catch(next)
    // }
  } catch (error) {
    console.log(`error`)
    next(error)
  }
}

module.exports = controller_error_handler
