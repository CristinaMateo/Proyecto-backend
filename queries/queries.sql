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


-- Insertar datos en tabla favmovies
INSERT INTO favmovies(user_id,title,genre,posterimg)
VALUES
('1','La revolucion de los gatitos','terror', 'https://acortar.link/dUkT6z');