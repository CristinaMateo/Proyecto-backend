const fetch = require('node-fetch');
const fetchAPI = require('../utils/fetchAPI');


const getRecomendation = async (req, res) => {
    try {
        let recomendation = await fetchAPI.getRecomendationInfoAPI()
        res.render('dashboard.pug', recomendation)
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

module.exports = {getRecomendation}