const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorCreateQuery = [

  check("createdDate")
    .exists()
    .notEmpty(),
  check("queryDate")
    .exists()
    .notEmpty(),
  check("queryHour")
    .exists()
    .notEmpty(),
  check("motive")
    .exists()
    .notEmpty(),
  check("state")
    .exists()
    .notEmpty(),
  check("users")
    .exists()
    .notEmpty(),
  check("professionals")
    .exists()
    .notEmpty(),

  (req, res, next) => {
    return validateResults(req, res, next)
  }
];

const validatorPutQuery = [

  check("createdDate")
    .optional(),
  check("queryDate")
    .optional(),
  check("queryHour")
    .optional(),
  check("motive")
    .optional(),
  check("state")
    .optional(),
  check("users")
    .optional(),
  check("professionals")
    .optional(),


  (req, res, next) => {
    return validateResults(req, res, next)
  }
];



const validatorIdQuery = [

  check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
];



module.exports = { validatorCreateQuery, validatorPutQuery, validatorIdQuery }
