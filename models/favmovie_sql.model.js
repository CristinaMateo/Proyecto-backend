const queries = require('../queries/favmovie_sql.queries')
const pool = require('../config/db_pgsql')//accede al fichero este que es el que accede al .env donde está la info

const getFavMovies = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion a bbdd
        const data = await client.query(queries.getAllMovies, [email])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const addFavMovie = async (infomovie) => {
    const {title, genre, posterimg, email} = infomovie;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.addFavMovie,[title, genre, posterimg, email])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE
const deleteFromFav = async (infomovie) => {
    const {title} = infomovie;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteFromFav,[title])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const favmovies = {
    getFavMovies,
    addFavMovie,
    deleteFromFav
}
module.exports = favmovies;
