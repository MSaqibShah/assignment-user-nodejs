const validate = (schema, type) => {
  return (req, res, next) => {
    if (type === "body") {
      const { error } = schema.validate(req.body);
      if (error) {
        return res.status(400).json({ error: error.details[0].message });
      }
    }

    next();
  };
};

module.exports = { validate };
