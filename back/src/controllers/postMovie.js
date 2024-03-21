const moviesServices = require("../services/moviesServices")

const postMovie = async (req, res) => {
    try {
        const { title, year, director, duration, genre, rate, poster } = req.body
        const savedMovie = await moviesServices.postMovie({
            title, year, director, duration, genre, rate, poster
        })
        res.status(201).json(savedMovie)
    } catch (error) {
        res.status(500).send(error.message)
    }
}

module.exports = postMovie