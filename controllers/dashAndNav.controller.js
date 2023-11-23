const isAdmin = require('./isAdmin')
const fetch = require('../utils/fetchAPI');

/** 
* @author Adrian Ortiz
* @method getMenu 
* @param res - the response, in this case, renders a pug file.
* @exports getMenu
*/

const getMenu = (req, res) => {
    res.render('navMenu.pug');
    
  }

/** 
* @author Adrian Ortiz
* @method getRecomendation - requests information from the mongo db or the API and sends it to a rendered pug file. 
* @async
* @throws {error}
* @param req - email
* @param res - the response, in this case, renders a pug file.
* @exports getRecomendation
*/

const getRecomendation = async (req, res) => {
    try {
        let recomendation = await fetch.getRecomendationInfoAPI
        res.render('dashboard.pug',{...recomendation, email: req.user.emails[0].value})
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