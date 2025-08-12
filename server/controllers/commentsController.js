const Comment = require('../models/Comment')

exports.addComment = async (req, res) => {
  try {
    const newComment = new Comment(req.body)
    await newComment.save()
    res.json({ success: true })
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}

exports.getComments = async (req, res) => {
  try {
    const comments = await Comment.find({ type: req.query.type })
    res.json(comments)
  } catch (err) {
    res.status(500).json({ error: 'Server error' })
  }
}