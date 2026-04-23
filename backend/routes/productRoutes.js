const express = require("express");

const router = express.Router();

const {
    addProduct
} = require("../controllers/productController");

const verifyToken =
    require("../middleware/authMiddleware");

router.post(
    "/add",
    verifyToken,
    addProduct
);

module.exports = router;