import { Database } from "bun:sqlite";
const schema = await Bun.file("./fullschema.sql").text()

const db = new Database("movies.db")
db.run(schema)

const select = db.query("SELECT * FROM movies")
const movies = select.all()

const express = require('express')
const PORT = 3000
const app = express();

app.use(express.static ('public')) // todo el mundo tenga acceso a "public"


//llama a /test no hay nada en en "/" por ende "Cannot GET /"
app.get("/movies", (req, res)=>{
    res.json(movies)

})

app.listen(PORT, () => console.log("Servidor funcionando en el puerto 3000"))

/*MVC: Modelo Vista Controlador, modelo que ejecuta la logica del negocio, 
vista lo que el cliente ve (navegador, GUI, TUI), 
controlador el puente entre las dos anteriores,
todo esto compone que se utiliza en proceso de desarrollo en proyectos*/

/*
¿Servidor HTTP?
SQLite3: es una base de datos en debido
Typescript y diferecias entre TS y JS
Que hace transaction
*/