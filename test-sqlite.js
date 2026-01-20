import { Database } from "bun:sqlite";
const schema = await Bun.file("./schema.sql").text()

/*No se sabe cuantas lineas de texto.funcion asincrona. 
await sirve para que se obligue a esperar debido a que no 
se sabe cuanto texto puede tener y tardar en procesar (asincrona)*/

const db = new Database("movies.db")
db.run(schema)

const select = db.query("SELECT * FROM movies")
console.log(select.all())
