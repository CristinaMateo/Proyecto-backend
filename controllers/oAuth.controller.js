const authConfig = require('../config/oauth')
const jwt = require("jsonwebtoken");
const passport = require("passport");

const authentication = () =>{
    passport.authenticate("google", { scope: ['email', 'profile'], prompt: "select_account" })
}


//Función de fallo
    const failOrSuccess = () =>{
        passport.authenticate('google', { failureRedirect: '/auth/failure' }),
        //Función exitosa
        (req, res) => {
        //En el cuerpo de esta función podemos almacenar usuarios en nuestra bbdd con el objeto que nos proporciona req.user (Para ello es necesario hacer la función asíncrona)

        //Estos son los pasos para crear un token si la autenticación es exitosa
        const payload = {
            //save here data
            check: true
        };
        const token = jwt.sign(payload, `secret_key`, {
            expiresIn: "20m"
        });

        console.log(token);
        //Almacenamos el token en las cookies
        res.cookie("access-token", token, {
            httpOnly: true,
            sameSite: "strict",
        }).redirect("/dashboard");
    }
} 


const failure = (req, res) => {
    res.send('Something went wrong... Try again')
    res.redirect('/login')
}


const logout =(req, res) => {
    req.logout(function (err) {
       if (err) { return next(err); }
       req.session.destroy();
       res.clearCookie("access-token").redirect('/login');
   });
   
}

module.exports = {
    authentication,
    failOrSuccess,
    failure,
    logout
}