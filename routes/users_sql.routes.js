const express = require('express');
const usersSqlController = require("../controllers/users_sql.controller.js");
const usersSqlRouter = express.Router();

router.post("/addUser", usersSqlController.createUser)
//cuando el usuario le da al boton submit de sign in se hace post seleccionando el username, el email (y la imagen?)

module.exports = usersSqlRouter;