const fetch = require("../utils/fetch.js")


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
    const movieDetails = await fetch.getMovieDetails(title) // => devuelve [] con resultados
    res.render("film-list", { movieDetails })
}

const showDetailedView = async (req, res) => {
    const id = req.params.id;
    const movieDetails = await fetch.getMovieByID(id) // => devuelve un objeto
    const staff = await fetch.getCrewInfobyID(id)
    const crewInfo = staff.crew;
    const directorObject = crewInfo.find(person => person.job == "Director")
    const director = directorObject.name || "Unknown";
    console.log(director)
    res.render("filmDetail", { movieDetails, director })
}

module.exports = {
    showSearchBar,
    searchFilmsByTitle,
    showFilms,
    showDetailedView
}