/** 
* @author Cristina Mateo
* @method isAdmin - check if role:admin
* @param req - email
* @return {boolean}
* @exports isAdmin
*/
const isAdmin =(email) =>{
    if(email === "cris.mateo.99@gmail.com" || email === "raulawadcabrera@gmail.com" || email === "antonio.mangado@gmail.com" || email === "adrianortizsuarez3@gmail.com"){
        return true
    }
    return false
}

module.exports = isAdmin