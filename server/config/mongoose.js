const mongoose = require('mongoose')

const config = require('./config')

module.exports = async () => {
  const mongo = await mongoose.connect(config.dbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  const db = mongo.connection.db

  console.log(`MongoDB opened: ${db.databaseName}`)

  db.on('disconnected', err => {
    if (err) {
      console.log(err)
    }
    console.log('MongoDB disconnected!')
  })

  db.once('open', () => {
    console.log(`MongoDB opened: ${db.databaseName}`)
  })
  db.on('error', err => {
    console.log(err)
    mongo.disconnect()
  })
  db.on('connected', () => {
    console.log('MongoDB connected!')
  })
  db.on('reconnected', () => {
    console.log('MongoDB reconnected!')
  })
}
