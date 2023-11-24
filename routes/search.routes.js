const searchControllers = require("../controllers/search.controllers.js")
const router = require('express').Router()

router.get("/search", searchControllers.showSearchBar)
router.post("/search", searchControllers.searchFilmsByTitle) 
router.get("/search/:title", searchControllers.showFilms)
router.get("/search/:id/details", searchControllers.showDetailedView)

module.exports = router;