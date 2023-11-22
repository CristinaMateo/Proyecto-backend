const express = require('express')
const dashAndNavController = require("../controllers/dashAndNav.controller")
const router = express.Router()


router.get("/menu", dashAndNavController.getMenu)
router.get('/dashboard', dashAndNavController.getRecomendation)

module.exports = router