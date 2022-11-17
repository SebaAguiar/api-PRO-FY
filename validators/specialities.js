const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");

const validatorCreateSpecialities = [

  check("name")
    .exists()
    .notEmpty()
    .isLength({ min: 4, max: 100 }),

  (req, res, next) => {
    return validateResults(req, res, next)
  }
]

const validatorPutSpecialities = [

  check("name")
    .optional(),

  (req, res, next) => {
    return validateResults(req, res, next)
  }
];

const validatorIdSpecialities = [

  check("id")

    .exists()
    .notEmpty()
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
];


module.exports = { validatorCreateSpecialities, validatorIdSpecialities, validatorPutSpecialities }
