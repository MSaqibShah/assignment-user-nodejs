const express = require("express");
require("dotenv").config();
const config = require("./config");
const mongoose = require("mongoose");
const { auth } = require("./middlewares/authMiddleware");

const app = express();
const environment = process.env.NODE_ENV || "DEVELOPMENT";
const appConfig = config[environment];
const port = appConfig.app.port;

const db = require("./db");
const userRouter = require("./routes/userRouter");
const authRouter = require("./routes/authRouter");

app.use(express.json());
app.use("/uploads", express.static("uploads"));
app.use("/api/auth", authRouter);
app.use("/api/users", auth, userRouter);

app.listen(port, () => {
  console.log(`Server started on http://localhost:${port}`);
});
