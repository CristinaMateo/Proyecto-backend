const express = require('express');
const dashboardController = require("../controllers/dashboard.controller");
const dashboardRouter = express.Router();

dashboardRouter.get('/dashboard', dashboardController.getRecomendation);

module.exports() = dashboardRouter;