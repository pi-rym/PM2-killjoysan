require("dotenv").config()
const { PORT } = process.env
const app = require ("./src/server")
const dbConfig = require("./src/config/dbConfig")

const startServer = async () => {
    try {
        await dbConfig()
        app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
    } catch (error) {
        console.log(error);
    }
}

startServer()
    


