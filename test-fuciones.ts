import { initDB } from "./db/init";
import {Database} from "bun:sqlite"
import { getMovieByGenre, getMoviesByTitleAndGenre } from "./models/movies";

const db = await initDB()
const m1 = getMoviesByTitleAndGenre(db, "hard", "action")
console.log(m1) 