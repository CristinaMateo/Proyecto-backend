const queries = {
    getUsersByEmail: `
    SELECT username, email, image, password 
    FROM users
    WHERE email=$1;`,
    createUser: `INSERT INTO users(username,email,image,password)
    VALUES
    ($1, $2, $3, $4);`,
    deleteUser: `
    DELETE FROM users
    WHERE email =$1;`,
    logUser: `
    UPDATE users
    SET logged = true
    WHERE email = $1
    RETURNING *`,
    logoutUsers: `
    UPDATE users
    SET logged = false
    RETURNING *`
}
module.exports = queries;