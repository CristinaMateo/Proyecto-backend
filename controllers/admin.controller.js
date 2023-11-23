const {Movie} = require('../models/admin.model');

/** 
* @author 
* @method createMovie - requests information from the body. Then creates the movie and sends it to a rendered pug file. 
* @async
* @param res - the response, in this case, renders a pug file.
* @exports createMovie
*/

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

/** 
* @author 
* @method getSearchBar
* @param res - the response, in this case, renders a pug file.
* @exports getSearchBar
*/

//get search bar
const getSearchBar =(req, res) => {
  res.render("adminSearch", {email: req.user.emails[0].value, user: req.user.displayName})
}

/** 
* @author 
* @method getForm 
* @param res - the response, in this case, renders a pug file.
* @exports getForm
*/

//mostrar form para crear peli
const getForm = (req, res) => {
    res.render('createMovie.pug');
  }

/** 
* @author 
* @method showDetailedView - requests by id in the database, if no results, in the API. 
* @async
* @param res - the response, in this case, renders a pug file.
* @exports showDetailedView
*/

const showDetailedView = async (req, res) => {
    const id = req.params.id;
    // Primero hacemos busqueda en base de datos por ID
    if (id.length > 20) {
        let movieDetails =  await Movie.find({_id: id}, "-__v")
        movieDetails = movieDetails[0];
        console.log(movieDetails)
        res.render("filmDetail", { movieDetails })
    } else {
        // Luego buscamos en API si no se obtienen resultados
        movieDetails = await fetch.getMovieByID(id) // => devuelve un objeto
        const staff = await fetch.getCrewInfobyID(id)
        const crewInfo = staff.crew;
        const directorObject = crewInfo.find(person => person.job == "Director")
        const director = directorObject.name || "Unknown";
        movieDetails.director = director
        movieDetails.poster_path = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
        res.render("adminDetail", { movieDetails })
    }
    
    
}

module.exports = {
    createMovie,
    getForm,
    getSearchBar,
    showDetailedView
}