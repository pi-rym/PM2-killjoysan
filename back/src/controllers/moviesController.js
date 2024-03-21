const moviesServices = require("../services/moviesServices")

const moviesController = async (req, res) => {
    try {
        const response = await moviesServices.getMovies();
        res.status(200).json(response);
    } catch (error) {
        res.status(500).send(error.message)
    }
    
}

module.exports = moviesController