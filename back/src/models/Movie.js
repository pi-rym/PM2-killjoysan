const mongoose = require("mongoose")

const movieSchema = new mongoose.Schema({
    title:{ 
        type: String,
        required: true,
        unique: true
    },
    year: {
        type: Number,
        required: true,
        min: [1895, `No hay películas antes de {VALUE}`]
    },
    director: {
        type: String,
        required: true
    },
    duration: {
        type: String,
        required: true
    },
    genre: {
        type: [String],
        required: true
    },
    rate: {
        type: Number,
        required: true,
        min: [0, `{VALUE} no es una calificación váida`],
        max: [10, `{VALUE} no es una calificación válida`]
    },
    poster: {
        type: String,
        validate: {
            validator : function(input) {
                return input.includes("https://")
            },
            message: props => `${props.value} no es una url válida`
        }
    }
})

const Movie = mongoose.model("Movie", movieSchema)

module.exports = Movie