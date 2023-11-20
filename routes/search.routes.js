const searchControllers = require("../controllers/search.controllers.js")
const router = require('express').Router()

router.get("/", searchControllers.showSearchBar)
router.post("/", searchControllers.searchFilmsByTitle) 
router.get("/:title", searchControllers.showFilms)

module.exports = router;