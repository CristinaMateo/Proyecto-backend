const dashboardModel = require('../models/dashboard.model');

const getRecomendation = async (req, res) => {
    let recomendation = await dashboardModel.getRecomendation()
    
    res.status(200).json(recomendation);
}

module.exports() = getRecomendation