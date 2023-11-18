apiKey = "1b1d8ac19d2157bc278dad11d08b1894"

const getInfoAPI = async () => {
    let response = await fetch (`https://api.themoviedb.org/3/discover/movie?&api_key=${apiKey}`)
    let info = await response.json()
    let image_title = info.results.map((recomendation) => ({
        title: recomendation.original_title,
        image: recomendation.poster_path
      }));

    return image_title
}

module.exports = {getInfoAPI}
