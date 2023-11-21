const Movie = require('../models/admin.model');

//Crear peli
async function createMovie(infoMovie){
    const{title, year, director, genre, posterimage, duration, sinopsis, cast, rating} = infoMovie.body
  try{ const movie = new Movie ({
    title,
    year,
    director,
    genre,
    posterimage,
    duration,
    overview,
    cast,
    rating
   }); 

   await movie.save();
   res.send('Datos guardados exitosamente.');
} catch (error) {
  res.status(500).send('Error al guardar los datos.');
}
};

//mostrar form para crear peli

const getForm = (req, res) => {
    res.render('createMovie.pug');
  }

module.exports = {
    createMovie,
    getForm
}