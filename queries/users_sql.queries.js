const queries = {
    getUsersByEmail: `
    SELECT username, email, image 
    FROM users
    WHERE email=$1;`,
    createUser: `INSERT INTO users(username,email,image,password)
    VALUES
    ($1, $2, $3, $4);`,
    deleteUser: `
    DELETE FROM users
    WHERE email =$1;`,
}
module.exports = queries;