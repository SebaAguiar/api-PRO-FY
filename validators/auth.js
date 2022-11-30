const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");



const validatorRegister = [

  // check("first_name")
  //   .exists()
  //   .notEmpty()
  //   .isLength({ min: 4, max: 30 }),
  // check("last_name")
  //   .exists()
  //   .notEmpty()
  //   .isLength({ min: 4, max: 30 }),
  // check("email")
  //   .exists()
  //   .notEmpty()
  //   .isEmail(),
  // check("state")
  //   .exists()
  //   .notEmpty(),
  // check("city")
  //   .exists()
  //   .notEmpty(),
  // check("password")
  //   .exists()
  //   .notEmpty()
  //   .isLength({ min: 4, max: 15 }),
  // check("role")
  //   .optional(),
  // check("contactNumber")
  //   .optional(),
  // check("address")
  //   .exists()
  //   .notEmpty(),
  // check("dni")
  //   .exists()
  //   .notEmpty()
  //   .isNumeric(),
  // check("country")
  //   .optional(),
  // check("postcode")
  //   .exists()
  //   .notEmpty(),

  check("first_name")
    .optional(),
  check("last_name")
    .optional(),
  check("email")
    .optional(),
  check("state")
    .optional(),
  check("city")
    .optional(),
  check("password")
    .optional(),
  check("role")
    .optional(),
  check("contactNumber")
    .optional(),
  check("address")
    .optional(),
  check("dni")
    .optional(),
  check("country")
    .optional(),
  check("postcode")
    .optional(),

  (req, res, next) => {
    return validateResults(req, res, next)
  }
];


const validatorLogin = [
  check("email")
    .exists()
    .notEmpty()
    .isEmail(),
  check("password")
    .exists()
    .notEmpty()
    .isLength({ min: 4, max: 15 }),


  (req, res, next) => {
    return validateResults(req, res, next)
  }
];


module.exports = { validatorRegister, validatorLogin }
