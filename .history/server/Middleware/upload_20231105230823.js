const multer = require("multer");

exports.upload = multer({ dest: "upload" }).single("file");
