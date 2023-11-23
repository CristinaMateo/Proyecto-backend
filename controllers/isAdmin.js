const isAdmin =(email) =>{
    if(email === "cris.mateo.99@gmail.com" || email === "raulawadcabrera@gmail.com" || email === "antonio.mangado@gmail.com" || email === ""){
        return true
    }
    return false
}

module.exports = isAdmin