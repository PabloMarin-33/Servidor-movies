# Apuntes 

## Traer csv e iniciar una base de datos

En la terminal copia el archivo de csv de peliculas a la raiz.

Borra movies.db. Con sqlite3 hace un nuevo movies.db con el schema "sqlite3 movies.db < schema.sql".

Con sqlite3 en la nueva movies.db ".mode csv" sirve para importar el csv y importarlo a un csv ".import movies.csv temp" se crea una base temporal con la datos importados del csv, para ver que todo este en su puesto "select * from movies" y "select * from temp LIMIT 10"(se vuelve revisar con esto el siguiente paso).

Ya revisados insertamos desde temp a movies "INSERT INTO movies (title, genres) SELECT title, genres FROM temp" a movies.

Hacemos una copia de tanto las inserciones como los create con "sqlite3 movies.db ".dump" > dump.sql" y desde dump.sql borramos todo menos los inserts