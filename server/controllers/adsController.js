const Ad = require('../models/Ad')

exports.getAds = async (req, res) => {
  try {
    const ads = await Ad.find()
    res.json(ads)
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}

exports.updateAds = async (req, res) => {
  try {
    const { topCode, sideCode, bottomCode, top, side, bottom } = req.body
    // Update or create ads
    await Ad.updateOne({ position: 'top' }, { code: topCode, enabled: top }, { upsert: true })
    // Similar for side and bottom
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}