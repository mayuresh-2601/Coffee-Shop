const jwt = require("jsonwebtoken");
const db = require("../config/db");
const bcrypt = require("bcrypt");

exports.login = (req, res) => {

    const { username, password } = req.body;

    if (!username || !password) {

        return res.status(400).json({
            message: "Username and password required"
        });

    }

    const sql =
        "SELECT * FROM users WHERE username = ?";

    db.query(sql, [username], async (err, result) => {

        if (err) {

            console.log(err);

            return res.status(500).json({
                message: "Database error"
            });

        }

        if (result.length === 0) {

            return res.status(401).json({
                message: "User not found"
            });

        }

        const user = result[0];

        const validPassword =
            await bcrypt.compare(
                password,
                user.password
            );

        if (!validPassword) {

            return res.status(401).json({
                message: "Invalid password"
            });

        }

        const token = jwt.sign(
            {
                id: user.id,
                username: user.username
            },
            process.env.JWT_SECRET,
            {
                expiresIn: "1h"
            }
        );

        res.json({
            message: "Login successful",
            token: token,
            user: {
                id: user.id,
                username: user.username
            }
        });

    });

};