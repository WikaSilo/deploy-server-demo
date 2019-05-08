const express = require('express')
const IndexController = require('../controllers')
const router = express.Router()

router.get('/', IndexController.home)
router.get('/*', IndexController.errorPage)

module.exports = router