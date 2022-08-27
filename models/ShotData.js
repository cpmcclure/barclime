const mongoose = require('mongoose')

const ShotDataSchema = new mongoose.Schema({
  userID: {
    type: String,
    required: true,
  },
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
  }
},
{collection: 'shot-data'})

module.exports = mongoose.model('ShotData', ShotDataSchema)
