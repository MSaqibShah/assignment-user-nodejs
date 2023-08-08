const jsonwebtoken = require("jsonwebtoken");
const config = require("../config");

const environment = process.env.NODE_ENV || "DEVELOPMENT";
const appConfig = config[environment].app;

const auth = (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const decoded = jsonwebtoken.verify(token, appConfig.jsonsecret);
    req.user = decoded;
    next();
  } catch (error) {
    res.status(401).json({ message: "Unauthorized" });
  }
};

const generateToken = (user) => {
  const token = jsonwebtoken.sign(
    {
      email: user.email,
      userId: user._id,
    },
    appConfig.jsonsecret,
    {
      expiresIn: "1h",
    }
  );
  return token;
};

const verifyToken = (token) => {
  const decoded = jsonwebtoken.verify(token, appConfig.jsonsecret);
  return decoded;
};

module.exports = { auth, generateToken, verifyToken };
