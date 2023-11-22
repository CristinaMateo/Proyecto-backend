const fetch = require("../utils/fetch.js")
const Movie = require("../models/admin.model.js")


// Controlador para mostrar la view "Search-Bar"
const showSearchBar = (req, res) => {
    res.render("search-bar")
}


// Controlador para el formulario tipo POST
const searchFilmsByTitle = (req, res) => {
    const title = req.body.title;
    res.redirect(`/search/${title}`); //Redirigimos a search/:title    
}

// Controlador para el [GET] en /search/:title
const showFilms = async (req, res) => {
    const title = req.params.title;
    try {
        let movieDetails =  await Movie.find({title}, "-__v") // => devuelve [{pelicula}, {pelicula}]
        if (movieDetails.length != 0) {
            console.log(movieDetails)
            res.render("film-list-db", { movieDetails })
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
            res.render("film-list", { movieDetails })
                }
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

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
        res.render("filmDetail", { movieDetails })
    }
    
    
}

module.exports = {
    showSearchBar,
    searchFilmsByTitle,
    showFilms,
    showDetailedView
}