const express = require('express');
const favmovieSqlController = require("../controllers/favmovie_sql.controller");
const favmovieSqlRouter = express.Router();

favmovieSqlRouter.get("/movies", favmovieSqlController.getFavMovies)
favmovieSqlRouter.post("/addFav", favmovieSqlController.addFavMovies)
//boton de añadir a favoritos tiene que hacer llamada post y coger la info de titulo, genero e imagen con selectores (de id)?
//en las cookies tiene que estar guardado el usuario que está loggeado que va a guardar esa peli
//si no está loggeado ningun usuario el boton de guardar en favoritos no debe mostrarse

module.exports = favmovieSqlRouter;