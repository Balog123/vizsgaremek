const express = require("express")
const regisztracio = require("./regisztracio")

const router = express.Router()

router.post("/regisztracio", regisztracio)

module.exports = router