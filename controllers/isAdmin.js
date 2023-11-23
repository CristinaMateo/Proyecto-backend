/** 
* @author 
* @method isAdmin - requests email. 
* @return true or false.
* @exports isAdmin
*/
const isAdmin =(email) =>{
    if(email === "cris.mateo.99@gmail.com"){
        return true
    }
    return false
}

module.exports = isAdmin