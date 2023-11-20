const favMovieModel = require('../models/favmovie_sql.model');

const getFavMovies = async (req, res) => {
    let movie;
        movie = await favMovieModel.getFavMovies(req.query.email);//esto accede a user.models y llama a esa funcion allí
    
    res.status(200).json(movies); // [] con los users encontradas
}

const addFavMovies = async (req, res) => {
    const newfav = req.body; 
    const response = await favMovieModel.addFavMovie(newfav);
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