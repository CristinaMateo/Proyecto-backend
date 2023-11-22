const {Movie} = require('../models/admin.model');

//Crear peli
async function createMovie(req, res){
try{
    const{title, release_date, director, genre, poster_path, runtime, overview, cast, vote_average} = req.body
  
   await Movie.create({ 
    title,
    release_date,
    director,
    genre,
    poster_path,
    runtime,
    overview,
    cast,
    vote_average });

    res.render('peticionOK.pug')

   }
   catch(error){
    res.render('peticionNO.pug')
   }
};

//get search bar
const getSearchBar =(req, res) => {
  res.render("adminSearch")
}


//mostrar form para crear peli
const getForm = (req, res) => {
    res.render('createMovie.pug');
  }

module.exports = {
    createMovie,
    getForm,
    getSearchBar
}