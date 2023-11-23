const favMovieModel = require('../models/favmovie_sql.model');

/** 
* @author 
* @method getFavMovies - requests user email. Then gets the favourite movies of this user. 
* @async
* @throws {error}
* @param req - email
* @param res - the response, in this case, renders a pug file with the data from the database.
* @exports getFavMovies
*/

const getFavMovies = async (req, res) => {
    try {
      const movies = await favMovieModel.getFavMovies(req.user.emails[0].value);
      res.render('favmovies', { movies });
    } catch (error) {
      console.error('Error al obtener las películas favoritas:', error);
      res.status(500).send('Error interno del servidor');
    }
  };

/** 
* @author 
* @method addFavMovies - requests information from the body. Then adds the favourite movie into the response. 
* @async
* @param req - email
* @param res - the response, in this case, return status(201) with the item created.
* @exports addFavMovies
*/

const addFavMovies = async (req, res) => {
    const newfav = req.body; 
    const response = await favMovieModel.addFavMovie({...newfav, email: req.user.emails[0].value});
    res.status(201).json({
        "items_created": response,
        data: newfav
    });
}

/** 
* @author 
* @method deleteFavMovies - requests information from the body.
* @async
* @param res - the response, in this case, returns a status(201) with the item deleted.
* @exports deleteFavMovies
*/

//DELETE
const deleteFavMovie = async (req, res) => {
    const deleteFav = req.body; // {email}
    const response = await favMovieModel.deleteFromFav(deleteFav);
    res.status(201).json({
        "items_deleted": response,
        data: deleteFav
    });
}

module.exports = {
    getFavMovies,
    addFavMovies,
    deleteFavMovie
}