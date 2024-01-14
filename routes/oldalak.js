const express = require("express")
const router = express.Router()

router.get("/regisztracio", (req, res) => {
    res.sendFile("regisztracio.html", { root: "./public" })
})

module.exports = router