const express = require('express')
const router = express.Router()
const shotController = require('../controllers/shot') 
const { ensureAuth, ensureGuest } = require('../middleware/auth')

router.get('/', ensureAuth, shotController.getShotData)

router.get('/:id', shotController.getShot)

router.post('/addShotData', shotController.addShotData)

router.put('/editShotData/:id', shotController.editShotData)

// router.delete('/deleteShotData/:id', dashController.deleteShotData)
router.delete("/deleteShotData/:id", shotController.deletePost);

module.exports = router