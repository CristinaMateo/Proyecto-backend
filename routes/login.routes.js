
  const router = require('express').Router()
  const loginController = require('../controllers/login.controller')

  router.get("/login", loginController.getLogin)
  router.get("/", loginController.getLogin)

  module.exports = router;