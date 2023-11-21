const {Movie} = require('../models/admin.model');

//Crear peli
async function createMovie(req, res){
try{
    const{title, year, director, genre, posterimage, duration, overview, cast, rating} = req.body
  
   await Movie.create({ 
    title,
    year,
    director,
    genre,
    posterimage,
    duration,
    overview,
    cast,
    rating });

    res.render('peticionOK.pug')

   }
   catch(error){
    res.render('peticionNO.pug')
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