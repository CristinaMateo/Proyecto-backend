// const fetch = require("../utils/fetchFilms.js")


// Controlador para mostrar la view "Search-Bar"
const showSearchBar = (req, res) => {
    res.render("search-bar")
}

const searchFilmsByTitle = (req, res) => {
    //Lo que ocurre cuando se envía el formulario (tipo POST):
    const title = req.body.title;
    res.redirect(`/search/${title}`); //Redirigimos a search/:title
    
}

const showFilms = async (req, res) => {
    //Lo que ocurre cuando llegamos a film/"title":
    const title = req.params.title;
    console.log(title)
    res.render("film-list", { title })
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
    showFilms
}