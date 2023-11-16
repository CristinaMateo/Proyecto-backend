const express = require('express');

const app = express();
const port = 3000;

//habilita recepción objetos
app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

//middlewares
// const $ = require('./middlewares/');
// const % = require('./middlewares/');
// const & = require('./middlewares/');

//configuración plantilla pug
app.set('view engine', 'pug');
app.set('views','./views');

//habilita
// app.use($);
// app.use('*',%);
// app.use(&(':method :host :status :param[id] - :response-time ms :body'));

// const ? = require('./routes/');
// const ! = require('./routes/');

//ruta api sin el /api seria para la web
// app.use('/api', ?);
// app.use('/api', !);

app.get('/', (req, res) => {
    res.send('Home')
});

// app.get('/first_template', function(req, res){
//     res.render('first_view.pug');
//   });
  
//   app.get('/dynamic_view', function(req, res){
//     // Llamada a otra API o BBDD
//     // Procesar datos y preparar objeto
//     res.render('dynamic', {
//        name: "The bridge - FullStack", 
//        url:"https://thebridge.tech"
//     });
//   });

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
});

