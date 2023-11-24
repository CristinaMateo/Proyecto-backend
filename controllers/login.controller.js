/** 
* @author Cristina Mateo
* @method getLogin 
* @param res - the response, in this case, renders a pug file.
* @exports getLogin
*/
const getLogin = (req, res) => {
    res.render('login.pug');
  }

  module.exports = {
  getLogin
  }