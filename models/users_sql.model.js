const queries = require('../queries/users_sql.queries')
const pool = require('../config/db_pgsql')//accede al fichero este que es el que accede al .env donde está la info
const regex = require('../utils/regex');
const bcrypt = require('bcrypt');
const saltRounds = 10;

const getUsersByEmail = async (email) => {
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion a bbdd
        const data = await client.query(queries.getUsersByEmail, [email])
        result = data.rows
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const createUser = async (infouser) => {
    const { email, username, password, password2, image } = infouser;
    const hashPassword = await bcrypt.hash(password, saltRounds)
    let client, result;
    try {
        if (regex.validateEmail(email) && regex.validatePassword(password)) {
            client = await pool.connect(); // Espera a abrir conexion
            const data = await client.query(queries.createUser, [username, email, image, hashPassword])
            result = data.rowCount  
        } else {
            console.warn("Invalid email or password")
        }
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

// DELETE
const deleteUser = async (infouser) => {
    const {email} = infouser;
    let client, result;
    try {
        client = await pool.connect(); // Espera a abrir conexion
        const data = await client.query(queries.deleteUser,[email])
        result = data.rowCount
    } catch (err) {
        console.log(err);
        throw err;
    } finally {
        client.release();
    }
    return result
}

const users = {
    getUsersByEmail,
    createUser,
    deleteUser,
}
module.exports = users;
