const express = require('express');

const app = express();
const port = 3000;

app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//middlewares
const checkApiKey = require('./middlewares/auth_api_key');
const error404 = require('./middlewares/error404');
const morgan = require('./middlewares/morgan');

//configuración plantilla pug
app.set('view engine', 'pug');
app.set('views','./views');

//habilita
app.use(checkApiKey);
app.use('*',error404);
app.use(morgan(':method :host :status :param[id] - :response-time ms :body'));


// const ? = require('./routes/');
// const ! = require('./routes/');

app.get('/', (req, res) => {
    res.send('Home')
});

//ruta api sin el /api seria para la web
// app.use('/api', ?);
// app.use('/api', !);

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});