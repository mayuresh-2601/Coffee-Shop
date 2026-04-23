const db = require("../config/db");

exports.createContact = (req, res) => {

    const {
        name,
        email,
        phone,
        message
    } = req.body;

    if (!name || !email || !message) {

        return res.status(400).json({
            message: "All fields required"
        });

    }

    const sql =
        "INSERT INTO contacts (name, email, phone, message) VALUES (?, ?, ?, ?)";

    db.query(
        sql,
        [name, email, phone, message],
        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    message: "Database error"
                });

            }

            res.json({
                message: "Contact saved successfully"
            });

        }

    );

};