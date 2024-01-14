const jwt = require("jsonwebtoken")
const db = require("../routes/db-config")
const bcrypt = require("bcryptjs")

const belepes = async (req, res) => {
    const { email, jelszo } = req.body

    if (!email || !jelszo) {
        return console.log("Add meg az emailed és a jelszavad")
    } else {
        db.query(
            'SELECT * FROM felhasznalo WHERE felhasznalo_email = ?', [email], 
            async (Err, result) => {
                if (Err) throw Err

                if (!result || !await bcrypt.compare(jelszo, result[0].jelszo)) {
                    return console.log("Rossz email vagy jelszo")
                } else {
                    const cookieOption = {
                        expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                        httpOnly: true
                    }

                    res.cookie("felhasznaloRegisztralva", token, cookieOption)
                    
                    return console.log("A felhasznaló belépett")
                }
            })
    }
}
module.exports = belepes