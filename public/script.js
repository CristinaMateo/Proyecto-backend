const dashboardController = require("../controllers/dashboard.controller.js")

const recomendation = document.getElementsByClassName("recomendation")
const searchButton = document.querySelector("#searchButton")
const favoriteButton = document.querySelector("#favoriteButton")
const openNav = document.querySelector("#openNav")
const closeNav = document.querySelector("#closeNav")
const nav = document.getElementById("nav")

document.addEventListener("DOMContentLoaded", function () {
    dashboardController.getRecomendation

    let randomNumber = Math.floor(Math.random()*20)
    let randomTitle = results[randomNumber].original_title
    let randomPoster = results[randomNumber].poster_path

    let randomTemplate = `span ${randomTitle}
    img(https://image.tmdb.org/t/p/w500${randomPoster}")`

    recomendation.innerHTML = randomTemplate

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
})




