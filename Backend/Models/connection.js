require("dotenv").config()
const mysql = require('mysql2');
const AppError = require("../Error/custom_app_error")

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'reji12345',
  database: 'rejita_project',
})


connection.connect((err) => {
  if (err) {
    throw new AppError(`Error in connceting to database`, 500)
  }
  console.log(`Connected to database to ${process.env.database}`)
})

module.exports = connection