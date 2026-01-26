/*fetch('/movies')
.then(response => response.json())
.then(data => {
    console.log(data);
})*/

const respuesta = await fetch("/movies")
const movies = await respuesta.json()
console.log(movies);

const tablaBody = document.querySelector("#tabla")
console.log(tablaBody)

movies.forEach(movie => createMovie(movie))

function createMovie(movie){
   const tr = document.createElement("tr")
    const tdId = document.createElement("td")
    const tdTitle = document.createElement("td")
    const tdGenres = document.createElement("td")

    tdId.textContent = movie.id
    tdTitle.textContent = movie.tittle
    tdGenres.textContent = movie.genres.replaceAll("|", ", ")

    tr.appendChild(tdId)
    tr.appendChild(tdTitle)
    tr.appendChild(tdGenres)
    tablaBody.appendChild(tr)  
}