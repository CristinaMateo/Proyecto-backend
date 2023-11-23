const express = require('express');
const app = express();
const port = 3000;
require("dotenv").config();
const helmet = require("helmet")


const passport = require("passport");
const session = require("express-session");


//habilita recepción objetos
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use Helmet!
app.use(helmet());


//Inicializamos passport y la session de passport
app.use(session({ secret: 'SECRET' }));
app.use(passport.initialize());
app.use(passport.session());

//middelwares
const error404 = require('./middlewares/error404')
const morgan = require('./middlewares/morgan')


//habilita acceso a public
app.use(express.static(__dirname + '/public'));

// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

//rutas
// const scraperRoute= require("./routes/scraper.routes.js")
const loginRoutes = require("./routes/login.routes")
const searchRoutes = require("./routes/search.routes.js")
const users_sqlRoutes = require("./routes/users_sql.routes")
const favmovie_sqlRoutes = require("./routes/favmovie_sql.routes")
const adminRoutes = require("./routes/adminMongo.routes")
const authRoutes = require("./routes/oAuth.routes.js")
const dashAndNav = require("./routes/dashAndNav.routes.js")

//Rutas Template
// app.use("/scraper", scraperRoute);
app.use('/', loginRoutes);
app.use('/', searchRoutes)
app.use('/', dashAndNav)
app.use('/',users_sqlRoutes);
app.use('/', favmovie_sqlRoutes);
app.use('/admin', adminRoutes);
app.use('/', authRoutes)


//configuración plantilla pug
app.set('view engine', 'pug');
app.set('views','./views');


//para rutas no existentes
app.use('*',error404)


app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});

