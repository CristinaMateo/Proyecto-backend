
  const router = require('express').Router()
  const loginController = require('../controllers/login.controller')
  const usersSqlController = require('../controllers/users_sql.controller.js')

  router.get("/login", loginController.getLogin)
  router.get("/", loginController.getLogin)
  router.post("/", usersSqlController.getUser) 
  

  module.exports = router;