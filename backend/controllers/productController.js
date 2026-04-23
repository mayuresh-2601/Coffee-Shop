const db = require("../config/db");

exports.addProduct = (req, res) => {

    const {
        name,
        price,
        category,
        image
    } = req.body;

    if (!name || !price || !category) {

        return res.status(400).json({
            message: "All fields required"
        });

    }

    const sql =
        "INSERT INTO products (name, price, category, image) VALUES (?, ?, ?, ?)";

    db.query(
        sql,
        [name, price, category, image],
        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    message: "Database error"
                });

            }

            res.json({
                message: "Product saved successfully"
            });

        }

    );

};