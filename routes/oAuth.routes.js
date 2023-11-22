require("../controllers/oAuth.controller");


//Ruta que renderiza el prompt de Google con las cuentas
app.get("/auth", passport.authenticate("google", { scope: ['email', 'profile'], prompt: "select_account" }));

app.get("/google/callBack?",
    //Función de fallo
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
    });


    app.get("/dashboard", (req, res) => {
        res.send("Welcome to your dashboard! You are now authenticated with google! <br><br> <a href='/logout'>Click here to logout!</a>");
    
    })
    
    //Definimos una ruta en caso de que la autenticación falle.
    app.get('/auth/failure', (req, res) => {
        res.send('Something went wrong..')
    });
    
    //Definimos la ruta de logout, donde eliminamos la sesión y limpiamos el token de las cookies.
    app.get('/logout', (req, res) => {
        req.logout(function (err) {
            if (err) { return next(err); }
            req.session.destroy();
            res.clearCookie("access-token").send('Goodbye! <br><br> <a href="/auth/google">Authenticate again</a>');
        });
    
    });