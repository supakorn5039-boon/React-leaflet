const multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "upload");
  },
  filename: function (req, file, cb) {
    const uniq = Date.now();
    cb(null, "Boon-" + uniq + file.originalname);
  },
});

exports.upload = multer({ storage: storage }).single("file");
