function validateForm({ title, year, director, duration, genre, rate, poster }) {
    if (!title || !year || !director || !duration || !genre[0] || !rate || !poster) 
        return "Todos los campos son obligatorios"
    if (director.length < 5 || director.length > 50)
        return "Director debe contener entre 5 y 50 caracteres";
    if (isNaN(rate) || rate < 1 || rate> 10)
        return "El rating debe ser un número entre 1 y 10";
    if (!poster.includes("https://"))
        return "El poster debe ser una URL válida";
    return null;
}

module.exports = validateForm