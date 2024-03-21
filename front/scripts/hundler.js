const axios = require("axios");

const renderFilms = require("./renderFilms");

const getFilms = async () => {
    try {
        const {data} = await axios.get("http://localhost:3000/movies")
        data.forEach(renderFilms)
    } catch (error) {
        console.log(error.message);
    }
}


module.exports = getFilms;