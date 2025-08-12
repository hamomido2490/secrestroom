const express = require('express')
const router = express.Router()
const adsController = require('../controllers/adsController')
const authMiddleware = require('../middleware/authMiddleware')

router.get('/', adsController.getAds)
router.post('/', authMiddleware, adsController.updateAds)

module.exports = router