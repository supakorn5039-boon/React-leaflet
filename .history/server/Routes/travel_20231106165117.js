const express = require("express");
const router = express.Router();

const { list, create, remove, read, update } = require("../Controllers/travel");

const { upload } = require("../Middleware/upload");

//http://localhost:5001/api/travel
router.get("/travel", list);
router.post("/travel", upload, create);
router.get("/travel/:id", read);
router.put("/travel/:id", upload, update);
router.delete("/travel/:id", remove);

module.exports = router;
