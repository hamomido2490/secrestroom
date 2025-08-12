const mongoose = require('mongoose')

const ratingSchema = new mongoose.Schema({
  type: String,
  rating: Number,
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Rating', ratingSchema)