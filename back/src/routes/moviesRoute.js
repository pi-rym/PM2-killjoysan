const { Router } = require("express")
const moviesController = require("../controllers/moviesController")
const postMovie = require("../controllers/postMovie")


const moviesRoute = Router()

moviesRoute.get("/", moviesController)
moviesRoute.post("/", postMovie)

module.exports = moviesRoute