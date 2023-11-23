// Importamos la función scraperSensa de la carpeta utils
const scraper = require('../utils/scraperSensa.js') 

module.exports = {
    getHello: async (req, res) => {
            res.status(200).json({"mensaje":"La prueba funciona"});
    },
    getOpinion: async (req, res) => {
        try {

            const opinion = await scraper.scrap("href=https://www.sensacine.com/peliculas/pelicula-206799/criticas-espectadores"); 
            
            res.status(200).json(opinion);

        } catch (error) {
            res.status(404).json({})
        }

    }
    
}

