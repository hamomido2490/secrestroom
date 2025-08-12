const Rating = require('../models/Rating')

exports.addRating = async (req, res) => {
  try {
    const newRating = new Rating(req.body)
    await newRating.save()
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}