const express = require('express');
const adminController = require("../controllers/admin.controller");
const adminRouter = express.Router();

adminRouter.post("/createMovie", adminController.createMovie)
//en view de formulario de crear peli admin hay que hacer que boton submit haga post a esta ruta
//adminRouter.post("/updateMovie",adminController.updateMovie)
//en view admin de update cuando hace submit a los cambios hace post a esta ruta (que en la funcion es un put de la peli en mongo)
//adminRouter.delete("/deleteMovie",adminController.deleteMovie)


module.exports = adminRouter;