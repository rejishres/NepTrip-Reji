require("dotenv").config()
require("./Models/Users/users.js")
require("./Models/Profiles/profiles.js")
const express = require("express")
const cors = require("cors")
const cookieParser = require("cookie-parser")
const routes = require("./Routes/index.js")
const error_handler_middleware = require("./Middlewares/Error_Handler.js/error_handler.middlewares.js")

const app = express()
app.use(cors())
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use("/profilePic", express.static("./profilePic"))
app.use(routes)
app.use(error_handler_middleware)

const PORT = 8080

app.listen(PORT, () => {
  console.log(`App ruuning on http://localhost:${PORT}`)
})
