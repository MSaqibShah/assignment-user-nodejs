const Joi = require("joi");

const register = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().email().required(),
  mobile: Joi.string().required(),
  // profilePicture: Joi.upload().single("profilePicture").required(),
  password: Joi.string()
    .min(8)
    .pattern(
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*])[a-zA-Z\d!@#$%^&*]+$/
    )
    .message(
      "Password must be at least 8 characters long and include one uppercase letter, one lowercase letter, one digit, and one special symbol (!@#$%^&*)"
    )
    .required(),
});

const login = Joi.object({
  email: Joi.string().email().required(),
  password: Joi.string().required(),
});

module.exports = { register };
