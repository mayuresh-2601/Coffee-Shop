const db = require("../config/db");

exports.createOrder = (req, res) => {

    const {
        fullname,
        coffee,
        quantity,
        address
    } = req.body;

    if (
        !fullname ||
        !coffee ||
        !quantity ||
        !address
    ) {

        return res.status(400).json({
            message: "All fields required"
        });

    }

    const sql =
        "INSERT INTO orders (fullname, coffee, quantity, address) VALUES (?, ?, ?, ?)";

    db.query(
        sql,
        [fullname, coffee, quantity, address],
        (err, result) => {

            if (err) {

                console.log(err);

                return res.status(500).json({
                    message: "Database error"
                });

            }

            res.json({
                message: "Order placed successfully"
            });

        }

    );

};