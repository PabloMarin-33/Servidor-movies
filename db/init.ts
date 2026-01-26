import { Database } from "bun:sqlite";
import { getAllMovies } from "../models/movies";
//inicia la base de datos
export async function initDB(){
    const db = new Database("./db/movies.db")
    const schema: string =  await Bun.file("./db/schema.sql").text()
    db.run(schema)
    const movies = getAllMovies(db)
    if (movies.length === 0){
//ejecuta dummysql
    const dump: string =  await Bun.file("./db/dummy.sql").text()
    db.run(dump)
    }
    return db
} //separamos la logica del modelo