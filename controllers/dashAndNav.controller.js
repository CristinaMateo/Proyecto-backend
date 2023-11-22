
const fetch = require('../utils/fetchAPI');

const getMenu = (req, res) => {
    res.render('navMenu.pug');
    
  }

const getRecomendation = async (req, res) => {
    try {
        let recomendation = await fetch.getRecomendationInfoAPI
        res.render('dashboard.pug',{recomendation})
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

module.exports = {
    getRecomendation,
    getMenu
}