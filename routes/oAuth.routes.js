const express = require('express');const authController = require("../controllers/oAuth.controller");
const authRouter = express.Router();


//Ruta que renderiza el prompt de Google con las cuentas
authRouter.get("/auth/google", authController.authentication);


authRouter.get("/google/callBack?", authController.redirectToFailure, authController.Success);

    
//Definimos una ruta en caso de que la autenticación falle.
authRouter.get('/auth/failure', authController.failure);
    

//Definimos la ruta de logout, donde eliminamos la sesión y limpiamos el token de las cookies.
authRouter.get('/logout', authController.logout);


module.exports = authRouter;