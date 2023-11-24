const jwt = require("jsonwebtoken");
const passport = require('passport');
const isAdmin = require("./isAdmin");
require('../config/oauth')



const authentication = passport.authenticate("google", { scope: ['email', 'profile'], prompt: "select_account" })

//Fallo
const redirectToFailure = passport.authenticate('google', { failureRedirect: '/auth/failure' })



/** 
* @author Cristina Mateo
* @method Success 
* @param res - the response renders a different pug file depending if the logged email has a user or admin role. Email is checked by using cookies.
* @exports Success
*/

//Éxito
const Success = (req, res) => {
//En el cuerpo de esta función podemos almacenar usuarios en nuestra bbdd con el objeto que nos proporciona req.user (Para ello es necesario hacer la función asíncrona)
 //Estos son los pasos para crear un token si la autenticación es exitosa
    const payload = {
    //save here data
    check: true
    };
    const token = jwt.sign(payload, `secret_key`, {
        expiresIn: "60m"
    });

    //Almacenamos el token en las cookies
    res.cookie("access-token", token, {
        httpOnly: true,
        sameSite: "strict",
    })
    res.cookie("logged-email", req.user.emails[0].value,{
        httpOnly: true,
        sameSite: "strict",
    })
    res.cookie("logged-user", req.user.displayName,{
        httpOnly: true,
        sameSite: "strict",
    })
    if(isAdmin(req.user.emails[0].value)){
        res.redirect("/admin/search")
    } else{
        res.redirect("/dashboard");
    }
    

}


/** 
* @author Cristina Mateo
* @method failure 
* @param res - the response redirects to login site if something goes wrong.
* @exports failure
*/
const failure = (req, res) => {
    res.send('Something went wrong... Try again')
    res.redirect('/login')
}


/** 
* @author Cristina Mateo
* @method logout 
* @param res - the response redirects to login site if user logges out.
* @exports logout
*/

const logout =(req, res) => {
    req.logout(function (err) {
       if (err) { return next(err); }
       req.session.destroy();
       res.clearCookie("logged-email");
       res.clearCookie("access-token").redirect('/login');
   });
   
}

module.exports = {
    authentication,
    redirectToFailure,
    Success,
    failure,
    logout
}