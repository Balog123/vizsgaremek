const db = require("../routes/db-config")
const bcrypt = require("bcryptjs")

const regisztracio = async (req, res) => {
    const { keresztnev, vezeteknev, email, jelszo: Njelszo } = req.body

    if (!email || !Njelszo) {
        return res.json({ status: "error", error: "Írd be az adatokat"})
    } else {
        db.qurey('SELECT felhasznalo_email FROM Felhasznalo WHERE felhasznalo_eamil = ?', 
            [email], async (err, result) => {
                if (err) throw err

                if (result[0]) {
                    return res.json({ status: "error", error: "Ez az eamil már foglalt" }) 
                }
                else {
                    const jelszo = await bcrypt.hash(Njelszo, 8)
                    db.query('INSERT INTO Felhasznalo SET ?', { 
                        keresztnev: keresztnev,
                        vezeteknev: vezeteknev,
                        email: email,
                        jelszo: jelszo
                    }, (error, results) => {
                            if (error){
                                throw error
                            } else {
                                return res.json({ status: "success", success: "A felhasznaló regisztrálva lett"})
                            }
                })
            }
        })
    }
}
module.exports = regisztracio