const express = require("express");
const router = express.Router();

const { list, create } = require("../Controllers/travel");

//http://localhost:5001/api/product
router.get("/travel", list);
router.post("/travel", create);

module.exports = router;
