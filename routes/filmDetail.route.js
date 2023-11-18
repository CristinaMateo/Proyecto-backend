const router = require('express').Router()
const filmDetailController = require('../controllers/filmDetail.controller')

router.get("/filmDetail", filmDetailController.getFilmDetail)


module.exports = router;