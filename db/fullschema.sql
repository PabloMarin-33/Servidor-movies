DROP TABLE  IF EXISTS movies;

CREATE TABLE movies (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    tittle TEXT NOT NULL,
    genres TEXT NOT NULL,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);

INSERT INTO movies (tittle, genres) VALUES 
("test", "test"),
("The Matrix", "Scifi, Action"),
("Coraline", "Animacion, horror"),
("Señor de los Anillos","Fantasia, Action");

UPDATE movies
SET tittle = "pelicula", genres = "generos"
WHERE id=1;

DELETE FROM movies
WHERE id=1;

SELECT * FROM movies;
