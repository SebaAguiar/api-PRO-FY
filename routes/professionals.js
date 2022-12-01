const express = require("express");
const { getAllProfessionals, getProfessionalById, deleteProfessional, editProfessional, createProfessional, restoreProfessional, PermaDeletePro, getAllProfessionalsBanned, } = require("../controllers/professionals");
const { validatorCreateProfessional, validatorIdProfessional, validatorPutProfessional } = require("../validators/professionals");


//! no entiendo pregunbtar rod
const { useStripeProfessionalsBasic, useStripeProfessionalsPremium } = require("../controllers/stripe")
// const { validatorCreateUser, validatorIdUser } = require("../validators/users");
const router = express.Router();



router.get("/", getAllProfessionals);

router.get("/ban", getAllProfessionalsBanned);

router.get("/:id", validatorIdProfessional, getProfessionalById);

router.delete("/:id", validatorIdProfessional, deleteProfessional);

router.delete("/perma/:id", validatorIdProfessional, PermaDeletePro);

router.put("/:id", validatorIdProfessional, validatorPutProfessional, editProfessional)

router.post("/", validatorCreateProfessional, createProfessional)

router.post("/payProfessionalsBasic", useStripeProfessionalsBasic)

router.post("/payProfessionalsPremium", useStripeProfessionalsPremium)

router.patch("/:id", validatorPutProfessional, restoreProfessional);



// validatorCreateProfessional








module.exports = router
