const mongoose = require('mongoose')

const commentSchema = new mongoose.Schema({
  type: String,
  comment: String,
  date: { type: Date, default: Date.now }
})

module.exports = mongoose.model('Comment', commentSchema)