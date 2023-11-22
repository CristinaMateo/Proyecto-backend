const searchButton = document.querySelector("#searchButton")
const favoriteButton = document.querySelector("#favoriteButton")
const openNav = document.querySelector("#openNav")
const closeNav = document.querySelector("#closeNav")
const nav = document.getElementById("nav")

document.addEventListener("DOMContentLoaded", function () {
    async function getRecomendationApi() {
        let response = await fetch (`https://api.themoviedb.org/3/discover/movie?&api_key=1b1d8ac19d2157bc278dad11d08b1894`)
        let info = await response.json()
        let image_title = info.results.map((recomendation) => ({
        title: recomendation.original_title,
        image: recomendation.poster_path
        }));
        console.log(image_title) 
    }
    function showRecomendation() {
        const recomendation = document.getElementsByClassName("recomendation")
        getRecomendationApi()

        let randomNumber = Math.floor(Math.random())
        let randomTitle = results[randomNumber].original_title
        let randomImage = results[randomNumber].poster_path

        let template = `<span>${randomTitle}</span>
        <img src="https://image.tmdb.org/t/p/w500${randomImage} alt="${randomImage}"`
        recomendation.innerHTML = template
    }
    showRecomendation()
})

searchButton.addEventListener("click", () => {
    window.location.href = "http://localhost:3000/search";
})
    
favoriteButton.addEventListener("click", () => {
    window.location.href = "http://localhost:3000/movies";
})
    
openNav.addEventListener("click", () => {
    nav.classList.add("visible")
})
    
closeNav.addEventListener("click", () => {
    nav.classList.remove("visible")
})





