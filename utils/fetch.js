const getMovieDetails = async (title) => {
    let response = await fetch(`https://api.themoviedb.org/3/search/movie?query=${title}&api_key=1b1d8ac19d2157bc278dad11d08b1894`); //{} o [{},{},{},{}]
    let movieDetails = await response.json(); //{} o [{},{},{},{}] 
    return movieDetails.results
};

module.exports = {
    getMovieDetails
}