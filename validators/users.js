const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorCreateUser = [
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
  // check("favorites")
  //   .optional(),
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
  // check("address")
  //   .exists()
  //   .notEmpty(),
  // check("DNI")
  //   .exists()
  //   .notEmpty()
  //   .isNumeric(),
  // check("country")
  //   .optional(),
  // check("postcode")
  //   .exists()
  //   .notEmpty(),
  // check("image")
  //   .optional(),
  // check("image.url")
  //   .optional(),
  // check("image.public_id")
  //   .optional(),
  check("first_name").optional(),
  check("last_name").optional(),
  check("email").optional(),
  check("favorites").optional(),
  check("state").optional(),
  check("city").optional(),
  check("password").optional(),
  check("role").optional(),
  check("address").optional(),
  check("DNI").optional(),
  check("country").optional(),
  check("postcode").optional(),
  check("image.url").optional(),
  check("image.public_id").optional(),
  check("plan").optional(),

  (req, res, next) => {
    return validateResults(req, res, next);
  },
];

const validatorPutUsers = [

//   check("first_name")
//     .optional(),
//   check("last_name")
//     .optional(),
//   check("email")
//     .optional(),
//   check("favorites")
//     .optional(),
//   check("state")
//     .optional(),
//   check("city")
//     .optional(),
//   check("password")
//     .optional(),
//   check("role")
//     .optional(),
//   check("address")
//     .optional(),
//   check("DNI")
//     .optional(),
//   check("country")
//     .optional(),
//   check("postcode")
//     .optional(),
//   check("image.url")
//     .optional(),
//   check("image.public_id")
//     .optional(),
//   check("plan").optional(),
    check("first_name").optional(),
  check("last_name").optional(),
  check("email").optional(),
  check("favorites").optional(),
  check("state").optional(),
  check("city").optional(),
  check("password").optional(),
  check("role").optional(),
  check("address").optional(),
  check("DNI").optional(),
  check("country").optional(),
  check("postcode").optional(),
  check("image.url").optional(),
  check("image.public_id").optional(),
  check("plan").optional(),

  (req, res, next) => {
    return validateResults(req, res, next)
  }
];

const validatorIdUser = [

  check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
];



module.exports = { validatorCreateUser, validatorIdUser, validatorPutUsers }
