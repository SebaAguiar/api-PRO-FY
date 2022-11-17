const { validationResult } = require("express-validator")

const validateResults = (req, res, next) => {
  console.log(req);
  try {
    validationResult(req).throw()
    return next();
  } catch (err) {
    res.status(404);
    res.send({ errors: err.array() });
  }
};



module.exports = validateResults 
