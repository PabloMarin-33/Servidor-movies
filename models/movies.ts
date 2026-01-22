import { Database } from "bun:sqlite";

export function getMovies(db: Database, filters: {title: string | undefined, genres: string | undefined}){
    const {title, genres} = filters;
    let movies
    if(title && genres) movies = getMoviesByTitleAndGenre(db, title, genres)
    else if(title) movies = getMoviesByTitle(db, title)
    else if(genres) movies = getMovieByGenre(db, genres)
    else movies = getAllMovies(db)
    return movies
}

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
    const query = db.query("SELECT * FROM movies WHERE tittle LIKE ?")
    return query.all(`%${title}%`)

}

export function getMovieByGenre(db: Database, genre: string){
    const query = db.query("SELECT * FROM movies WHERE genres LIKE ?")
    return query.all(`%${genre}%`)
}

export function getMoviesByTitleAndGenre(db: Database, title: string, genre: string){
    const query = db.query("SELECT * FROM movies WHERE tittle LIKE ? AND genres LIKE ?")
    return query.all(`%${title}%`, `%${genre}%`)
}