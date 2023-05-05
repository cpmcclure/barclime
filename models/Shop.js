const mongoose = require('mongoose')

const ShopSchema = new mongoose.Schema({
  grindMin: {
    type: Number,
    required: true,
  },
  grindMax: {
    type: Number,
    required: true,
  },
  doseMin: {
    type: Number,
    required: true,
  },
  doseMax: {
    type: Number,
    required: true,
  },
  weightMin: {
    type: Number,
    required: true
  },
  weightMax: {
    type: Number,
    required: true
  },
  timeMin: {
    type: Number,
    required: true
  },
  timeMax: {
    type: Number,
    required: true
  },
  shopId: {
    type: String,
    required: true
  }
},
{collection: 'shop'})

module.exports = mongoose.model('Shop', ShopSchema)
