const express = require("express");

const router = express.Router();

const {
    products
} = require("../controllers/Product.controller");

router.get("/get-all", products);

module.exports = router;