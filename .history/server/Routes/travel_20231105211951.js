const express = require("express");
const router = express.Router();

const { list, create } = require("../Controllers/travel");

//http://localhost:5001/api/product
router.get("/product", list);
router.post("/product", create);

module.exports = router;
