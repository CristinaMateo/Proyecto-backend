const connection = require('../config/db_mongo');

const objectSchema = {
    title: String,
    release_date: String,
    director: String,
    genre: String,
    poster_path: String,
    runTime: String,
    overview: String,
    cast: String,
    vote_average: Number
}

// Crear el esquema
const movieSchema = connection.Schema(objectSchema);
// Crear el modelo
const Movie = connection.model('Movie', movieSchema);

async function createMovie(title, year, director, genre, posterimage, duration, overview, cast, rating) {
    const movie = new Movie({
        title, 
        release_date, 
        director, 
        genre, 
        poster_path, 
        runTime, 
        overview, 
        cast, 
        vote_average
    })
const result = await movie.save();
console.log(result);
}

module.exports = {
    createMovie,
    Movie
}  

// Creacion de peli para probar conexion a ATLAS
// createMovie("I am Robot", 2005, "Wes Anderson", "Drama", "https://m.media-amazon.com/images/M/MV5BNmE1OWI2ZGItMDUyOS00MmU5LWE0MzUtYTQ0YzA1YTE5MGYxXkEyXkFqcGdeQXVyMDM5ODIyNw@@._V1_FMjpg_UX1000_.jpg", "1h 30mins", "Muchos roboces, pocos arroces", ["Will Smith", "Mas gente"], 9)

