const searchControllers = require("../controllers/search.controllers.js")
const router = require('express').Router()

router.get("/", searchControllers.showSearchBar)
// router.get("/:title", searchControllers.showMoviesByTitle)

module.exports = router;