DROP TABLE  IF EXISTS movies;

CREATE TABLE movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    genres TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO movies (title, genres) VALUES 
("test", "test"),
("The Matrix", "Scifi, Action"),
("Coraline", "Animacion, horror"),
("Señor de los Anillos","Fantasia, Action");

UPDATE movies
SET title = "pelicula", genres = "generos"
WHERE id=1;

DELETE FROM movies
WHERE id=1;

SELECT * FROM movies;
