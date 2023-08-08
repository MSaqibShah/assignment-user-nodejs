const mongoose = require("mongoose");
const config = require("./config");

const environment = process.env.NODE_ENV || "DEVELOPMENT";

const dbConfig = config[environment].db;

const db = mongoose
  .connect(`mongodb://${dbConfig.host}:${dbConfig.port}/${dbConfig.name}`, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`Connected to database ${dbConfig.name}`);
  })
  .catch((err) => {
    console.log("Error connecting to database", err);
  });

module.exports = db;
