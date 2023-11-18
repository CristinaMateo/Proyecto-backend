const express = require('express');


const app = express();
const port = 3000;

//habilita recepción objetos
app.use(express.json());

//middelwares
const error404 = require('./middlewares/error404')
const morgan = require('./middlewares/morgan')


// Logger
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));

//rutas
const loginRoutes = require("./routes/login.routes")
const filmDetailRoutes = require("./routes/filmDetail.routes")
//const users_sqlRoutes = require("./routes/users_sql.routes")
//const favmovie_sqlRoutes = require("./routes/favmovie_sql.routes")


//Rutas Template
app.use('/', loginRoutes);
app.use('/', filmDetailRoutes);
//app.use('/',users_sqlRoutes);
//app.use('/', favmovie_sqlRoutes);

//configuración plantilla pug
app.set('view engine', 'pug');
app.set('views','./views');


//para rutas no existentes
app.use('*',error404)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});

