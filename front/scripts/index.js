const cleanForm = require("./cleanForm");
const createMovie = require("./createMovie");
const getFilms = require("./hundler");

document.addEventListener("DOMContentLoaded", () => {
    getFilms();
    const clean = document.getElementById("clean")
    clean?.addEventListener("click", cleanForm)
    const submit = document.getElementById("submit")
    submit?.addEventListener("click", createMovie)
})



