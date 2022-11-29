const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorCreateAdmin = [


  check("first_name")
    .optional(),
  check("last_name")
    .optional(),
  check("email")
    .optional(),
  check("contactNumber")
    .optional,
  check("state")
    .optional(),
  check("city")
    .optional(),
  check("password")
    .optional(),
  check("role")
    .optional(),
  check("address")
    .optional(),
  check("dni")
    .optional(),
  check("country")
    .optional(),
  check("postcode")
    .optional(),
  // check("image")
  //   .optional(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
];

const validatorPutAdmin = [

  check("first_name")
    .optional(),
  check("last_name")
    .optional(),
  check("email")
    .optional(),
  check("contactNumber")
    .optional,
  check("state")
    .optional(),
  check("city")
    .optional(),
  check("password")
    .optional(),
  check("role")
    .optional(),
  check("address")
    .optional(),
  check("dni")
    .optional(),
  check("country")
    .optional(),
  check("postcode")
    .optional(),
  // check("image")
  //   .optional(),


  (req, res, next) => {
    return validateResults(req, res, next)
  }
];

const validatorIdAdmin = [

  check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
];



module.exports = { validatorCreateAdmin, validatorIdAdmin, validatorPutAdmin }
