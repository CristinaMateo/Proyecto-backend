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

const getStaff = async function () {
    let director = []
    for await (const id of ids) {
        const staff = await fetch.getCrewInfobyID(id)
        const crewInfo = staff.crew;
        const directorObject = crewInfo.find(person => person.job == "Director")
        if (directorObject) {
            const directorName = directorObject.name || "Unknown";
            director.push(directorName)
        } else {
            director.push("Unknown director")
        }
    }
    return director
};

const getRunTimeAndGenre = async function () {
    let runTimes = [];
    let genre = [];
    for await (const id of ids) {
        const movie = await fetch.getMovieByID(id)
        if (movie.genres.length > 0) {
            const genreName = movie.genres[0].name
            genre.push(genreName)
        } else {
            genre.push("Unknown Genre")
        }

        const time = movie.runtime
        if (time == 0) {
            runTimes.push("No data")
        } else {
            runTimes.push(time) 
        }
    }
    return { runTimes, genre }
};

module.exports = {
    getMovieDetails,
    getMovieByID,
    getCrewInfobyID,
    getStaff,
    getRunTimeAndGenre
}