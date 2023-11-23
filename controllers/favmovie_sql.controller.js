const favMovieModel = require('../models/favmovie_sql.model');

const getFavMovies = async (req, res) => {
    try {
      const movies = await favMovieModel.getFavMovies(req.user.emails[0].value);
      res.render('favmovies', { movies }); // Renderiza la vista favmovies.pug con los datos obtenidos
    } catch (error) {
      console.error('Error al obtener las películas favoritas:', error);
      res.status(500).send('Error interno del servidor');
    }
  };


const addFavMovies = async (req, res) => {
    const newfav = req.body; 
    const response = await favMovieModel.addFavMovie({...newfav, email: req.user.emails[0].value});
    res.status(201).json({
        "items_created": response,
        data: newfav
    });
}


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