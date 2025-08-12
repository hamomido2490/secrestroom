const express = require('express')
const router = express.Router()
const commentsController = require('../controllers/commentsController')

router.post('/', commentsController.addComment)
router.get('/', commentsController.getComments)

module.exports = router