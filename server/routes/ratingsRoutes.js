const express = require('express')
const router = express.Router()
const ratingsController = require('../controllers/ratingsController')

router.post('/', ratingsController.addRating)

module.exports = router