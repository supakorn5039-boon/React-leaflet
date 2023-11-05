const multer = require("multer");

exports.upload = multer().single("file");
