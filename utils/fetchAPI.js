
const fetch = require('node-fetch');

/** 
* @Author Adrian Ortiz
* @method getRecomendationInfoAPI - fetches data from the movie API
* @async
* @return {object} - One object with the details of the movies found.
* @exports getRecomendationInfoAPI
*/

const getRecomendationInfoAPI = async () => {
    let response = await fetch (`https://api.themoviedb.org/3/discover/movie?&api_key=1b1d8ac19d2157bc278dad11d08b1894`)
    let info = await response.json()
    let image_title = info.results.map((recomendation) => ({
        title: recomendation.original_title,
        image: recomendation.poster_path
      }));

    return image_title
}

module.exports = {getRecomendationInfoAPI}
