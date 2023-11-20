-- Crear tabla users
CREATE TABLE users (
  user_id serial NOT NULL PRIMARY KEY, 
  username varchar(45) NOT NULL, 
  email varchar(45) NOT NULL UNIQUE, 
  image varchar(45) NOT NULL
);


--Crear tabla favmovies
CREATE TABLE favmovies (
	movie_id serial NOT NULL PRIMARY KEY,
	user_id int,
	FOREIGN KEY (user_id) REFERENCES users (user_id),
	title varchar(45) NOT NULL,
	genre varchar(45) NOT NULL,
	posterImg varchar(50) NOT NULL
);

-- Insertar datos en tabla users
INSERT INTO users(username,email,image)
VALUES
('$1','$2','$3');

--eliminar usuario
DELETE FROM users
WHERE email =$1;


-- Insertar datos en tabla favmovies (añadir una peli a favoritos)
INSERT INTO favmovies(title,genre, posterimg, user_id) 
    VALUES ($1, $2,$3,
    (SELECT user_id FROM users WHERE email=$4))


-- mostrar todas las pelis favoritas de un usuario
SELECT m.title, m.genre, m.posterimg
FROM favmovies AS m
INNER JOIN users AS u
ON m.user_id=u.user_id
WHERE u.email = $1;

--eliminar una película de favoritos
DELETE FROM favmovies
    WHERE title =$1;