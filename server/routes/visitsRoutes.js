const express = require('express')
const router = express.Router()
const visitsController = require('../controllers/visitsController')

router.post('/', visitsController.recordVisit)

module.exports = router