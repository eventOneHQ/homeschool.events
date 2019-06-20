const mongoose = require('mongoose')

const { Schema } = mongoose

const eventSchema = new Schema(
  {
    name: {
      type: String,
      required: true
    },
    url: {
      type: String,
      required: true
    },
    startDate: {
      type: String,
      required: true
    },
    endDate: {
      type: String,
      required: true
    },
    type: {
      type: String,
      enum: ['Convention'],
      required: true
    },
    location: {
      city: String,
      state: String
    },
    approved: {
      type: Boolean,
      required: true,
      default: false
    },
    verification: {
      success: Boolean,
      challenge_ts: String,
      hostname: String,
      score: Number
    }
  },
  { timestamps: true }
)

const EventModel = mongoose.model('Event', eventSchema)

module.exports = EventModel
