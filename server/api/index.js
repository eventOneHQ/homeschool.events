const express = require('express')

const events = require('./events')

const router = express.Router()

router.get('/events', (req, res, next) => {
  return res.status(200).json(events)
})

module.exports = router
