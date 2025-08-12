const Stat = require('../models/Stat')

exports.recordVisit = async (req, res) => {
  try {
    const stat = await Stat.findOne() || new Stat()
    stat.visitors += 1
    await stat.save()
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}