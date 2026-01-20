import { Database } from "bun:sqlite";

export function getAllMovies(db: Database){
const query = db.query("SELECT * FROM  movies")
return query.all()
}

export function getMovieById(db: Database, id: number){
    const query = db.query("SELECT * FROM movies WHERE ID = ?")
    return query.get(id) // el id de qui sustituye el signo de interrogacion
}
/* CRUD: create => insert, read => select, update => upd, delete => delete */
export function getMoviesByTitle(db: Database, title: string){
    const queryTitle = db.query("SELECT * FROM movies WHERE tittle LIKE ?")
    return queryTitle.all(`%${title}%`)

}
