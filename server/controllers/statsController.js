const Stat = require('../models/Stat')
const Rating = require('../models/Rating')
const Comment = require('../models/Comment')

exports.getStats = async (req, res) => {
  try {
    const stat = await Stat.findOne() || new Stat()
    const ratings = await Rating.find()
    const avgRating = ratings.length ? ratings.reduce((total, item) => total + item.rating, 0) / ratings.length : 0
    const commentsCount = await Comment.countDocuments()
    res.json({ visitors: stat.visitors, analyses: stat.analyses, avgRating, commentsCount })
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}

exports.recordAnalysis = async (req, res) => {
  try {
    const stat = await Stat.findOne() || new Stat()
    stat.analyses += 1
    await stat.save()
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}