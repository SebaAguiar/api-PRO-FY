const express = require("express");
const { getAllProfessionals, getProfessionalById, deleteProfessional, editProfessional, createProfessional, } = require("../controllers/professionals");
const { validatorCreateProfessional, validatorIdProfessional, validatorPutProfessional } = require("../validators/professionals");


//! no entiendo pregunbtar rod
// const { useStripe } = require("../controllers/stripe")
// const { validatorCreateUser, validatorIdUser } = require("../validators/users");
const router = express.Router();



router.get("/", getAllProfessionals);

router.get("/:id", validatorIdProfessional, getProfessionalById);

router.delete("/:id", validatorIdProfessional, deleteProfessional);

router.put("/:id", validatorIdProfessional, validatorPutProfessional, editProfessional)

router.post("/", validatorCreateProfessional, createProfessional)

// router.post("/payProfessionalsBasic", useStripeProfessionalsBasic)

// router.post("/payProfessionalsPremium", useStripeProfessionalsPremium)


// validatorCreateProfessional








module.exports = router
