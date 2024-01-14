const express = require("express")
const db = require("./routes/db-config")
const PORT = process.env.PORT

const app = express()

app.use(express.json())

app.use("/js", express.static(__dirname + "/public/js"))

db.connect((err) => {
    if (err) throw err
    console.log("Az adatbázis sikeresen csatlakoztatva")
})

app.use("/", require("./routes/oldalak"))
app.use("/api", require("./controllers/auth"))



app.listen(PORT, () => {
    console.log(`A szerver fut a ${PORT} porton`)
})