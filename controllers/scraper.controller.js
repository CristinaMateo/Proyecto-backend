// Importamos la función scraper de la carpeta utils
const scraper = require('../utils/scraper.js') // ---Descomenta esta línea---

module.exports = {
    getHello: async (req, res) => {
            res.status(200).json({"mensaje":"La prueba funciona"});
    },
    getOpinion: async (req, res) => {
        try {
            // ---Descomenta las 2 siguientes líneas para hacer scraping---
            const opinion = await scraper.scrap("https://www.sensacine.com/peliculas/pelicula-206799/criticas-espectadores"); 
            console.log(opinion);
            res.status(200).json(opinion);
            // res.status(200).json({"mensaje":"Aquí irán los productos"}); // ---Comenta esta línea---
        } catch (error) {
            res.status(404).json({})
        }

    }
    
}