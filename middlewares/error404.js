// Última ruta por defecto. En caso de no encotrarse ninguna anterior, devolvemos un 404
// Para rutas no existentes

/** 
* @author Cristina Mateo
* @method manage404 
* @param res - the response, in this case, returns a status(404).
* @exports manage404
*/

const manage404 =  (req,res) => {
    res.status(404).json({
        msj:"404 not found", 
        img:"https://http.cat/images/404.jpg"});
}

module.exports = manage404

//