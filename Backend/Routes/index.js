const { isloggedIn } = require("../Middlewares/Users/is_logged_in")

const router = require("express").Router()

router.use("/user", require("./Users/users"))
router.use("/profile", isloggedIn, require("./Profiles/profiles"))

module.exports = router
