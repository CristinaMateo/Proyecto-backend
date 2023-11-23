const express = require('express');
const adminController = require("../controllers/admin.controller");
const adminRouter = express.Router();


adminRouter.get("/search", adminController.getSearchBar)
adminRouter.post("/search", adminController.searchFilmsByTitle) 
adminRouter.get("/search/:title", adminController.showFilms)
adminRouter.get("/search/:id/details", adminController.showDetailedView)
adminRouter.get("/createMovieForm", adminController.getForm)
adminRouter.post("/createMovie", adminController.createMovie)
adminRouter.get("/updateMovieForm", adminController.getUpdateForm)
adminRouter.put("/updateMovie/:title", adminController.updateMovie)
adminRouter.delete("/deleteMovie",adminController.deleteMovie)


module.exports = adminRouter;