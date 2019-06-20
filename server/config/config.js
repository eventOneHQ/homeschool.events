const path = require('path')

require('dotenv').config()

module.exports = {
  port: process.env.PORT || 3000,
  env: process.env.NODE_ENV || 'development',
  dist: path.join(__dirname, '../../dist/client'),
  dbUrl:
    process.env.MONGODB_URI || 'mongodb://localhost:27017/homeschool-events',
  recaptchaKey: process.env.RECAPTCHA_KEY
}
