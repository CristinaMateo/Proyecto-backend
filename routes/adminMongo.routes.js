const express = require('express');
const adminController = require("../controllers/admin.controller");
const adminRouter = express.Router();


adminRouter.get("/search", adminController.getSearchBar)
adminRouter.post("/search", adminController.searchFilmsByTitle) 
adminRouter.get("/search/:title", adminController.showFilms)
adminRouter.get("/search/:id/details", adminController.showDetailedView)
adminRouter.get("/createMovieForm", adminController.getForm)
adminRouter.post("/createMovie", adminController.createMovie)


//adminRouter.post("/updateMovie",adminController.updateMovie)
//en view admin de update cuando hace submit a los cambios hace post a esta ruta (que en la funcion es un put de la peli en mongo)
//adminRouter.delete("/deleteMovie",adminController.deleteMovie)


module.exports = adminRouter;