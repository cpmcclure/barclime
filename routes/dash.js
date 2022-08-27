const express = require('express')
const router = express.Router()
const dashController = require('../controllers/dash') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, dashController.getShotData)

router.post('/addShotData', dashController.addShotData)

module.exports = router