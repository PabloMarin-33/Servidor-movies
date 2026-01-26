import { initDB } from "./db/init";
import {Database} from "bun:sqlite"
import { getAllMovies, getMovieByGenre, getMoviesByTitleAndGenre, insertMovie } from "./models/movies";

const db: Database = await initDB()
insertMovie(db, "esto es una prueba", "Drama|Comedy")
const movies = getAllMovies(db)
console.log(movies)