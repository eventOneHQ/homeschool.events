const express = require('express')
// const axios = require('axios')

// const config = require('../config')
const EventModel = require('./event.model')

const router = express.Router()

router.get('/events', async (req, res, next) => {
  try {
    const eventDocs = await EventModel.find({ approved: true }).select(
      '-verification -__v -approved'
    )

    const processEvents = eventDocs.map(async event => {
      const domain = new URL(event.url).hostname

      return { ...event.toJSON(), logo: `https://logo.clearbit.com/${domain}` }
    })

    const events = await Promise.all(processEvents)

    return res.status(200).json(events)
  } catch (err) {
    return next(err)
  }
})

// router.post('/events', async (req, res, next) => {
//   try {
//     const verifyPayload = {
//       response: req.query.token,
//       secret: config.recaptchaKey
//     }
//     const verificationRes = await axios.post(
//       'https://www.google.com/recaptcha/api/siteverify',
//       null,
//       { params: verifyPayload }
//     )
//     const verification = verificationRes.data

//     if (!verification.success || verification.score < 0.6) {
//       throw new Error('reCAPTCHA failed!')
//     }

//     const event = new EventModel(req.body)

//     event.approved = false
//     event.verification = verification

//     return res.status(201).json(event)
//   } catch (err) {
//     return next(err)
//   }
// })

module.exports = router
