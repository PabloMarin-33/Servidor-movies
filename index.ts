import { initDB } from "./db/init";
import { getAllMovies, getMovieById, getMoviesByTitle } from "./models/movies";

const db = await initDB()
//const peliculas = getAllMovies(db)
//console.log(peliculas)
const pelicula = getMovieById(db, 1)
console.log(pelicula)

const titulo = getMoviesByTitle(db, "Toy")
console.log(titulo)
