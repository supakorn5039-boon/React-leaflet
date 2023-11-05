const multer = require("multer");


const storage = multer.diskStorage({
    destination: function(req , file ,cb) {
        cb(null , '/tmp/my-uploads')
    },
    filename: function(req ,file , cb){
        const uniqueSuffix = Date.now() + '_' + Math.round(Math.random() * 1E
        cb(null, file.fieldname + '_' + uniqueSuffix)
        )
    }
})

exports.upload = multer({ dest: "upload" }).single("file");
