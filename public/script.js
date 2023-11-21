const fetchAPI = require("../utils/fetchAPI")

const recomendation = document.getElementsByClassName("recomendation")
const searchButton = document.getElementById("searchButton")
const favoriteButton = document.getElementById("favoriteButton")

document.addEventListener("DOMContentLoaded", function () {
    fetchAPI.getRecomendationInfoAPI

    let randomNumber = Math.floor(Math.random()*20)
    let randomTitle = results[randomNumber].original_title
    let randomPoster = results[randomNumber].poster_path

    let randomTemplate = `span ${randomTitle}
    img(https://image.tmdb.org/t/p/w500${randomPoster}")`

    recomendation.innerHTML = randomTemplate
})

searchButton.addEventListener("click", function (){

})

favoriteButton.addEventListener("click", function (){
    
})

const openNav = document.getElementById("menu_hamburguesa")
const closeNav = document.getElementById("closeMenu")
const nav = document.getElementById("nav")

openNav.addEventListener("click", function () {
    nav.classList.add("visible")
})

closeNav.addEventListener("click", function () {
    nav.classList.remove("visible")
})


