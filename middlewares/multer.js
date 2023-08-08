const multer = require("multer");
const config = require("../config");
const enviroment = process.env.NODE_ENV || "development";
const appConfig = config[enviroment];

console.log(appConfig);
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, appConfig.app.file_uploads);
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});
const upload = multer({ storage: storage });

module.exports = upload;
