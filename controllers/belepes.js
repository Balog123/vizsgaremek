const jwt = require("jsonwebtoken")
const db = require("../routes/db-config")
const bcrypt = require("bcryptjs")

const belepes = async (req, res) => {
    const { email, jelszo } = req.body

    if (!email || !jelszo) {
        return console.log("Add meg az emailed és a jelszavad")
    } else {
        console.log(jelszo)
        db.query(
            'SELECT * FROM felhasznalo WHERE felhasznalo_email = ?', [email], 
            async (Err, result) => {
console.log('Hashed Password from DB:', result[0].felhasznalo_jelszo);
console.log('Provided Password:', jelszo);
                if (Err) throw Err

                if (!result.length || !await bcrypt.compare(jelszo, result[0].felhasznalo_jelszo)) {
                    return res.json({ status: "error", error: "Rossz email vagy jelszo"})
                } else {
                    const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, {
                        expiresIn: process.env.JWT_EXPIRES
                    })

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