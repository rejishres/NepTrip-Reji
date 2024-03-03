const {
  view_profile,
  create_profile,
  update_profile,
} = require("../../Controllers/Profiles/profile")
const { upload } = require("../../Middlewares/multer/multer")

const router = require("express").Router()

router.get("/", view_profile)
router.post("/create", upload.single("profile_pic_url"), create_profile)
router.post("/update", upload.single("profile_pic_url"), update_profile)

module.exports = router
