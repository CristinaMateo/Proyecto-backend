const queries = {
    getUsersByEmail: `
    SELECT username, email, image 
    FROM users
    WHERE email=$1;`,
    createUser: `INSERT INTO users(username,email,image)
    VALUES
    ('$1','$2','$3');`,
    deleteUser: `
    DELETE FROM users
    WHERE email =$1;`,
}
module.exports = queries;