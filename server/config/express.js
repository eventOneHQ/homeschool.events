const express = require('express')
const httpError = require('http-errors')
const logger = require('morgan')
const bodyParser = require('body-parser')
const cors = require('cors')
const helmet = require('helmet')
const path = require('path')

const config = require('./config')
const routes = require('./routes')

const app = express()

app.use(logger(config.env === 'development' ? 'dev' : 'combined'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// secure apps by setting various HTTP headers
app.use(helmet())

// enable CORS - Cross Origin Resource Sharing
app.use(cors())

console.log('dist', config.dist)

// serve static files
app.use(express.static(config.dist))
app.use(/^((?!(api)).)*/, (req, res) => {
  return res.sendFile(path.join(config.dist, 'index.html'))
})

app.use('/', routes)

// catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = httpError.NotFound()
  return next(err)
})

// error handler, send stacktrace only during development
app.use((err, req, res, next) => {
  return res.status(err.status || 500).json({
    name: err.name,
    message: err.message,
    status: err.status
  })
})

module.exports = app
