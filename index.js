const express = require('express');
const pug = require('pug')


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


//Rutas Template
app.use('/', loginRoutes);


//configuración plantilla pug
app.set('view engine', 'pug');
app.set('views','./views');


//para rutas no existentes
app.use('*',error404)

app.listen(port, () => {
    console.log(`Example app listening on port http://localhost:${port}`)
});

