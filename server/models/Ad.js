const mongoose = require('mongoose')

const adSchema = new mongoose.Schema({
  position: String,
  code: String,
  enabled: Boolean
})

module.exports = mongoose.model('Ad', adSchema)