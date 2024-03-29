const mongoose = require('mongoose')

const ShotDataSchema = new mongoose.Schema({
  grind: {
    type: Number,
    required: true,
  },
  dose: {
    type: Number,
    required: true,
  },
  weight: {
    type: Number,
    required: true
  },
  time: {
    type: Number,
    required: true
  },
  roastDate: {
    type: Date,
    required: true
  },
  tastingNotes: {
    type: Array
  },
  currentTime: {
    type: Date,
    required: true
  },
  temp: {
    type: Number,
    required: true
  },
  press: {
    type: Number,
    required: true
  },
  humid: {
    type: Number,
    required: true
  },
  userId: {
    type: String,
    required: true
  }
},
{collection: 'shot-data'})

module.exports = mongoose.model('ShotData', ShotDataSchema)
