const getMovieDetails = async (title) => {
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=1b1d8ac19d2157bc278dad11d08b1894`); //{} o [{},{},{},{}]
    let movieDetails = await response.json(); //{} o [{},{},{},{}] 
    return movieDetails.results
};

const getMovieByID = async (id) => {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${id}?api_key=1b1d8ac19d2157bc278dad11d08b1894`);
    let singleMovieDtl = await response.json()
    return singleMovieDtl
};

const getCrewInfobyID = async (id) => {
    let response = await fetch(`https://api.themoviedb.org/3/movie/${id}/credits?&api_key=03ce75d14fd1010ba46c32378b9f079a`)
    let crewDetails = await response.json();
    return crewDetails
};

module.exports = {
    getMovieDetails,
    getMovieByID,
    getCrewInfobyID
}