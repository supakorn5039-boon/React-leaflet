const express = require("express");
const router = express.Router();

const { list, create, remove, read } = require("../Controllers/travel");

const { upload } = require("../Middleware/upload");

//http://localhost:5001/api/travel
router.get("/travel", list);
router.get("/travel", id, read);
router.post("/travel", upload, create);
router.delete("/travel/:id", remove);

module.exports = router;
