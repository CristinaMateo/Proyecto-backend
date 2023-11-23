const express = require('express');
const adminController = require("../controllers/admin.controller");
const adminRouter = express.Router();
const searchControllers = require("../controllers/search.controllers.js")


adminRouter.get("/search", adminController.getSearchBar)
adminRouter.get("/search/:title", searchControllers.showFilms)
adminRouter.get("/search/:id/details", adminController.showDetailedView)
adminRouter.get("/createMovieForm", adminController.getForm)
adminRouter.post("/createMovie", adminController.createMovie)


//adminRouter.post("/updateMovie",adminController.updateMovie)
//en view admin de update cuando hace submit a los cambios hace post a esta ruta (que en la funcion es un put de la peli en mongo)
//adminRouter.delete("/deleteMovie",adminController.deleteMovie)


module.exports = adminRouter;