const pool = require('../config/db_pgsql');
const recomendationQuery = require("./queries/dashboard.queries")


const getRecomendation = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(recomendationQuery.getRecomedation)
        result = data.rows
        
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

module.exports = {getRecomendation}
