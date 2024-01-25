const express = require('express')
const router = express.Router()
const ToughtsController = require('../controllers/ToughtsController')
//controller

router.get('/', ToughtsController.showToughts)

module.exports = router