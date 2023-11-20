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
    console.log(movieDetails)
    res.render("film-list", { movieDetails })
    // const movieDetails = await fetch.getFilm(title);
    // if (movieDetails.Response === "True") {
    //     console.log(movieDetails);
    //   res.render("film", { movieDetails });
    // } else {
    //   res.render("error");
    // }
}

module.exports = {
    showSearchBar,
    searchFilmsByTitle,
    showFilms,
}