const Movie = require('../models/admin.model');

//Crear peli
async function createMovie(infoMovie){
    const{title, year, director, genre, posterimage, duration, sinopsis, cast, rating} = infoMovie.body
   const movie = new Movie ({
    title,
    year,
    director,
    genre,
    posterimage,
    duration,
    sinopsis,
    cast,
    rating
   }) 

   const result = await movie.save();
    console.log(result);
}

module.exports = {createMovie}