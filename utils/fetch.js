/** 
* @author Antonio Mangado
* @function getMovieDetails - fetches data from the movie API by movie title.
* @async
* @param {string} title - the title of the movie to find
* @returns {object} - One or several objects with the details of movies found
*/
const getMovieDetails = async (title) => {
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=1b1d8ac19d2157bc278dad11d08b1894`); //{} o [{},{},{},{}]
    let movieDetails = await response.json(); //{} o [{},{},{},{}] 
    return movieDetails.results
};


/** 
* @author Antonio Mangado
* @function getMovieByID - fetches data from the movie API by ID. Returns extra information from getMovieDetails
* @async
* @param {number} id - the id of the movie to find
* @returns {object} - only one object
*/
const getMovieByID = async (id) => {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1b1d8ac19d2157bc278dad11d08b1894`);
    let singleMovieDtl = await response.json()
    return singleMovieDtl
};

/** 
* @author Antonio Mangado
* @function getCrewInfoByID - fetches staff information from the movie API by ID. 
* @async
* @param {number} id - the id of the movie to find the staff from.
* @returns {array} - an array with two objects: crew and cast
*/
const getCrewInfobyID = async (id) => {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?&api_key=03ce75d14fd1010ba46c32378b9f079a`)
    let crewDetails = await response.json();
    return crewDetails
};



module.exports = {
    getMovieDetails,
    getMovieByID,
    getCrewInfobyID,
}