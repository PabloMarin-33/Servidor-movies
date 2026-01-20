import { Database } from "bun:sqlite";

export function getAllMovies(db: Database){
const query = db.query("SELECT * FROM  movies")
return query.all()
}


/* CRUD: create => insert, read => select, update => upd, delete => delete */

