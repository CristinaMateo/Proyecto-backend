
const Movie = require('../models/admin.model');
const fetch = require("../utils/fetch.js");



//mostrar form para crear peli
const getForm = (req, res) => {
    res.render('createMovie.pug');
}

//mostrar form para update peli
const getUpdateForm = (req, res) => {
    res.render("updateForm.pug")
}


/** 
* @author 
* @method createMovie - creates the movie and sends it to a rendered pug file. 
* @async
* @throws {error}
* @param req - title,release_date,director,genre,poster_path,runtime,overview,cast,vote_average
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
  res.render("adminSearch")
}

// Controlador para el formulario tipo POST
const searchFilmsByTitle = (req, res) => {
    const title = req.body.title;
    res.redirect(`/admin/search/${title}`); //Redirigimos a search/:title    
}

/** 
* @author 
* @method getForm 
* @param res - the response, in this case, renders a pug file.
* @exports getForm
*/

  const showFilms = async (req, res) => {
    const title = req.params.title;
    try {
        let movieDetails =  await Movie.find({title}, "-__v") // => devuelve [{pelicula}, {pelicula}]
        if (movieDetails.length != 0) {
            res.render("admin-list-db", { movieDetails })
        } else {
            movieDetails = await fetch.getMovieDetails(title) // => devuelve [] con resultados
            const ids = movieDetails.map(movie => movie.id)
            const getStaff = async function () {
                let director = []
                for await (const id of ids) {
                    const staff = await fetch.getCrewInfobyID(id)
                    const crewInfo = staff.crew;
                    const directorObject = crewInfo.find(person => person.job == "Director")
                    if (directorObject) {
                        const directorName = directorObject.name || "Unknown";
                        director.push(directorName)
                    } else {
                        director.push("Unknown director")
                    }
                }
                return director
            };

            const getRunTimeAndGenre = async function () {
                let runTimes = [];
                let genre = [];
                for await (const id of ids) {
                    const movie = await fetch.getMovieByID(id)
                    if (movie.genres.length > 0) {
                        const genreName = movie.genres[0].name
                        genre.push(genreName)
                    } else {
                        genre.push("Unknown Genre")
                    }

                    const time = movie.runtime
                    if (time == 0) {
                        runTimes.push("No data")
                    } else {
                        runTimes.push(time) 
                    }
                }
                return { runTimes, genre }
            };
            const directors =  await getStaff()
            const genreAndRuntime = await getRunTimeAndGenre()
            for (let i = 0; i < directors.length; i++) {
                movieDetails[i].director = directors[i]
                movieDetails[i].runtime = genreAndRuntime.runTimes[i]
                movieDetails[i].genre = genreAndRuntime.genre[i]
            }
            res.render("admin-film-list", { movieDetails })
                }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

/** 
* @author 
* @method showDetailedView - requests by id in the database, if no results, in the API. 
* @async
* @param req - id
* @param res - the response, in this case, renders a pug file.
* @exports showDetailedView
*/

const showDetailedView = async (req, res) => {
    const id = req.params.id;
    // Primero hacemos busqueda en base de datos por ID
    if (id.length > 20) {
        let movieDetails =  await Movie.find({_id: id}, "-__v")
        movieDetails = movieDetails[0];
        
        res.render("adminDetails", { movieDetails })
    } else {
        // Luego buscamos en API si no se obtienen resultados
        movieDetails = await fetch.getMovieByID(id) // => devuelve un objeto
        const staff = await fetch.getCrewInfobyID(id)
        const crewInfo = staff.crew;
        const directorObject = crewInfo.find(person => person.job == "Director")
        const director = directorObject.name || "Unknown";
        movieDetails.director = director
        movieDetails.poster_path = `https://image.tmdb.org/t/p/w500${movieDetails.poster_path}`
        res.render("adminDetails", { movieDetails })
    }   
}


const updateMovie = async (req, res) =>{
    try{
        let body = req.body;
        let {title} = req.params
        await Movie.updateOne({title}, body)
    res.render("peticionOK.pug")
}
    catch(error){
        res.render("peticionNO.pug")
    }
};

const deleteMovie = async (req, res) => {
    try{
        let title = req.body.title;
        console.log("title:", title)
        await Movie.deleteOne({title});
    res.status(200).json({msg:"nice"})
    }
    catch(error){
        res.status(500).json({msg:error})
    }
}


module.exports = {
    createMovie,
    getForm,
    getSearchBar,
    searchFilmsByTitle,
    showFilms,
    showDetailedView,
    updateMovie,
    getUpdateForm,
    deleteMovie
}