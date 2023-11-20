const connection = require('../config/db_mongo');

const objectSchema = {
    title: String,
    year: Number,
    director: String,
    genre: String,
    posterimage: String,
    duration: String,
    sinopsis: String,
    cast: Array,
    rating: Number
}

// Crear el esquema
const movieSchema = connection.Schema(objectSchema);
// Crear el modelo
const Movie = connection.model('Movie', movieSchema);

async function createMovie(title, year, director, genre, posterimage, duration, sinopsis, cast, rating) {
    const movie = new Movie({
        title, 
        year, 
        director, 
        genre, 
        posterimage, 
        duration, 
        sinopsis, 
        cast, 
        rating
    })
const result = await movie.save();
console.log(result);
}

module.exports = {
    createMovie
}  

// Creacion de peli para probar conexion a ATLAS
// createMovie("I am Robot", 2005, "Wes Anderson", "Drama", "https://m.media-amazon.com/images/M/MV5BNmE1OWI2ZGItMDUyOS00MmU5LWE0MzUtYTQ0YzA1YTE5MGYxXkEyXkFqcGdeQXVyMDM5ODIyNw@@._V1_FMjpg_UX1000_.jpg", "1h 30mins", "Muchos roboces, pocos arroces", ["Will Smith", "Mas gente"], 9)

