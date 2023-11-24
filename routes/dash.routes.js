const express = require('express')
const dashAndNavController = require("../controllers/dash.controller")
const router = express.Router()


router.get('/dashboard', dashAndNavController.getRecomendation)

module.exports = router