const express = require("express")
const regisztracio = require("./regisztracio")
const belepes = require("./belepes")

const router = express.Router()

router.post("/regisztracio", regisztracio)
router.post("/belepes", belepes)

module.exports = router