const mongoose = require('mongoose')

const statSchema = new mongoose.Schema({
  visitors: { type: Number, default: 0 },
  analyses: { type: Number, default: 0 }
})

module.exports = mongoose.model('Stat', statSchema)