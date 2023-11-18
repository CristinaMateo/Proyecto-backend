const queries = {
    getAllMovies:`
    SELECT m.title, m.genre, m.posterimg
    FROM favmovies AS m
    INNER JOIN users AS u
    ON m.user_id=u.user_id
    WHERE u.email = $1;`,
    addFavMovie: `
    INSERT INTO favmovies(title,genre,posterimg, user_id) 
    VALUES ($1, $2,$3,
    (SELECT user_id FROM users WHERE email=$4))`,
    deleteFromFav: `
    DELETE FROM favmovies
    WHERE title =$1;
    `,
}
module.exports = queries;