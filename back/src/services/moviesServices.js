// require("dotenv").config()
// const { BASE_URL } = process.env
// const axios = require("axios")

// const {Movies} = require("../types/class")
// const moviesValidation = require("../utils/validations/moviesValidations")

// module.exports = {
//     getMovies : async () => {
//         try {
//             const { data } = await axios.get(BASE_URL)
//             const movies = data.map((movie) => {
//                 if(!moviesValidation(movie)) {
//                     throw new Error("Missing required fields")
//                 }
//                 return new Movies(movie)
//             })
//             return movies
//         } catch (error) {
//             throw new Error(error)
//         }
//     }
// }
const Movie = require("../models/Movie")

module.exports = {
    getMovies: async () => {
        const allMovies = await Movie.find()
        return allMovies
    },
    postMovie: async (movie) => {
        const newMovie = new Movie(movie)
        const savedMovie = await newMovie.save()
        return savedMovie
    }
}
