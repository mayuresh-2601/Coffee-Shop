const express = require("express");
const cors = require("cors");

require("dotenv").config();

/* CONNECT DATABASE */

require("./config/db");

const app = express();

/* MIDDLEWARE */

app.use(cors());
app.use(express.json());

/* ROUTES */

const authRoutes = require("./routes/authRoutes");
const productRoutes = require("./routes/productRoutes");
const orderRoutes = require("./routes/orderRoutes");
const contactRoutes = require("./routes/contactRoutes");

/* USE ROUTES */

app.use("/api/auth", authRoutes);
app.use("/api/products", productRoutes);
app.use("/api/orders", orderRoutes);
app.use("/api/contacts", contactRoutes);

/* TEST ROUTE */

app.get("/", (req, res) => {
    res.send("Server is running successfully");
});

/* PORT */

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log("Server running on port", PORT);
});