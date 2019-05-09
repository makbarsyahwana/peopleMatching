const express = require('express')
const router = express.Router()
const controller =  require('./controller')
const checkValidation = require('../../validation/expressValidator')


// router for user profile
router.post('/create', checkValidation, controller.post)
router.get('/getAll', controller.get)
router.get('/match', controller.match)

module.exports = router

