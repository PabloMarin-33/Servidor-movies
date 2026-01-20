import { initDB } from "./db/init";
import { getAllMovies, getMovieById, getMoviesByTitle } from "./models/movies";
import  express  from "express";// bun add express , bun add @types/express
const app = express();
const PORT = 3000
const db = await initDB()

app.get("/movies", (req, res) => {
    const pelicula = getAllMovies(db)
    res.json(pelicula)
})

app.listen(PORT, () => {
    console.log(`Servidor funcionando en puerto ${PORT}`)
})


/*const db = await initDB()
const peliculas = getAllMovies(db)
console.log(peliculas)
const pelicula = getMovieById(db, 1)
console.log(pelicula)

const titulo = getMoviesByTitle(db, "Toy")
console.log(titulo)
*/
