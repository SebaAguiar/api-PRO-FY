const { check } = require("express-validator");
const validateResults = require("../utils/handleValidator");


const validatorCreateProfessional = [

  // check("first_name")
  //   .exists()
  //   .notEmpty()
  //   .isLength({ min: 4, max: 100 }),
  // check("last_name")
  //   .exists()
  //   .notEmpty()
  //   .isLength({ min: 4, max: 100 }),
  // check("email")
  //   .exists()
  //   .notEmpty()
  //   .isEmail(),
  // check("password")
  //   .exists()
  //   .notEmpty(),
  // check("dni")
  //   .exists()
  //   .notEmpty(),
  // check("professionalId")
  //   .exists()
  //   .notEmpty(),
  // check("country")
  //   .exists()
  //   .notEmpty(),
  // check("state")
  //   .exists()
  //   .notEmpty(),
  // check("city")
  //   .exists()
  //   .notEmpty(),
  // check("zip")
  //   .exists()
  //   .notEmpty(),
  // check("professionalAdress")
  //   .exists()
  //   .notEmpty(),
  // check('specialities')
  //   .exists()
  //   .notEmpty(),
  // check("schedule")
  //   .optional(), //! temporal
  // check("modality")
  //   .optional(), //! temporal
  // check("scheduleDays")
  //   .optional(),
  // check("scheduleHours")
  //   .optional(),
  // check('rating')
  //   .optional(),

  check("first_name")
    .optional(),
  check("last_name")
    .optional(),
  check("email")
    .optional(),
  check("password")
    .optional(),
  check("dni")
    .optional(),
  check("professionalId")
    .optional(),
  check("country")
    .optional(),
  check("state")
    .optional(),
  check("city")
    .optional(),
  check("zip")
    .optional(),
  check("professionalAdress")
    .optional(),
  check('specialities')
    .optional()
    .isMongoId(),
  check("modality")
    .optional(), //! temporal
  check("scheduleDays")
    .optional(),
  check("scheduleHours")
    .optional(),
  check('rating')
    .optional(),
  check("plan").optional(),


  (req, res, next) => {
    return validateResults(req, res, next)
  }
];

const validatorPutProfessional = [

  check("first_name")
    .optional(),
  check("last_name")
    .optional(),
  check("email")
    .optional(),
  check("password")
    .optional(),
  check("dni")
    .optional(),
  check("professionalId")
    .optional(),
  check("country")
    .optional(),
  check("state")
    .optional(),
  check("city")
    .optional(),
  check("zip")
    .optional(),
  check("professionalAdress")
    .optional(),
  check('specialities')
    .optional()
    .isMongoId(),
  check("schedule")
    .optional(), //! temporal
  check("modality")
    .optional(), //! temporal
  check("scheduleDays")
    .optional(),
  check("scheduleHours")
    .optional(),
  check('rating')
    .optional(),
  check("plan").optional(),

  (req, res, next) => {
    return validateResults(req, res, next)
  }
];

const validatorIdProfessional = [

  check("id")
    .exists()
    .notEmpty()
    .isMongoId(),
  (req, res, next) => {
    return validateResults(req, res, next)
  }
];



module.exports = { validatorCreateProfessional, validatorIdProfessional, validatorPutProfessional }
