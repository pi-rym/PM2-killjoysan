const axios = require("axios")
const validateForm = require("./validateForm")

function createMovie(event) {

    event.preventDefault()

    const title = document.getElementById("title").value
    const year = document.getElementById("year").value
    const director = document.getElementById("director").value
    const duration = document.getElementById("duration").value
    const genre = document.getElementById("genre").value.split(", ")
    const rate = document.getElementById("rate").value
    const poster = document.getElementById("poster").value

    const newMovie = { title, year, director, duration, genre, rate, poster }

    const error = validateForm(newMovie)
    
    if(error) return alert(error)
    
    axios
        .post("http://localhost:3000/movies/", newMovie)
        .then(() => alert("Película creada"))
        .catch((error) => alert("Error al crear la película"))
}

module.exports = createMovie
