const express = require('express')
const router = express.Router()
const shotController = require('../controllers/shot') 
const profileController = require('../controllers/profile')
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', profileController.getProfile)
router.put('/editProfile', profileController.editProfile)

module.exports = router