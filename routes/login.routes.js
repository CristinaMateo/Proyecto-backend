
  const router = require('express').Router()
  const loginController = require('../controllers/login.controller')
  const usersSqlController = require('../controllers/users_sql.controller.js')

  router.get("/login", loginController.getLogin)
  router.post("/", usersSqlController.getUser) 
  router.get("/", loginController.getLogin)

  module.exports = router;