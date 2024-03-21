const mongoose = require("mongoose")
require("dotenv").config()
const{ MONGODB_URI } = process.env

const dbConfig = async () => {
    await mongoose.connect(MONGODB_URI)
    
}

module.exports = dbConfig