const express = require("express")
const db = require("./db-config")
const PORT = process.env.PORT

const app = express()

app.use(express.json())


db.connect((err) => {
    if (err) throw err
    console.log("Az adatbázis sikeresen csatlakoztatva")
})

app.listen(PORT, () => {
    console.log(`A szerver fut a ${PORT} porton`)
})