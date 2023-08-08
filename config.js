require("dotenv").config();

const config = {
  DEVELOPMENT: {
    app: {
      port: process.env.PORT_DEV,
      jsonsecret: process.env.JSON_SECRET_DEV,
      file_uploads: process.env.FILE_UPLOADS_DEV,
    },
    db: {
      host: process.env.DB_HOST_DEV,
      port: process.env.DB_PORT_DEV,
      name: process.env.DB_NAME_DEV,
    },
  },
  PRODUCTION: {
    app: {
      port: process.env.PORT_PROD,
      jsonsecret: process.env.JSON_SECRET_PROD,
      file_uploads: process.env.FILE_UPLOADS_PROD,
    },
    db: {
      host: process.env.DB_HOST_PROD,
      port: process.env.DB_PORT_PROD,
      name: process.env.DB_NAME_PROD,
    },
  },
};

module.exports = config;
