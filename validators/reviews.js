const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorCreateReview = [

  check("review")
    .exists()
    .notEmpty(),
  check("user")
    .exists()
    .notEmpty(),
  check("professional")
    .exists()
    .notEmpty(),
  check("response")
    .optional(),


  (req, res, next) => {
    return validateResults(req, res, next)
  }
];

const validatorPutReview = [

  check("review")
    .optional(),
  check("user")
    .optional(),
  check("professional")
    .optional(),
  check("response")
    .optional(),


  (req, res, next) => {
    return validateResults(req, res, next)
  }
];



const validatorIdReview = [

  check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
];



module.exports = { validatorCreateReview, validatorPutReview, validatorIdReview }
