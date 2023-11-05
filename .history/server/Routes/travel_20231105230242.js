const express = require("express");
const router = express.Router();

const { list, create } = require("../Controllers/travel");

const upload = require("../Middleware/upload");

//http://localhost:5001/api/travel
router.get("/travel", list);
router.post("/travel", create);

module.exports = router;
