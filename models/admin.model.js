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

module.exports = Movie;