const express = require("express");
const { getSpecialities, createSpecialities, getSpecialitiesById, editSpecialities, deleteSpecialities, PermaDeleteSpecialities } = require("../controllers/specialities");
const { validatorCreateSpecialities, validatorIdSpecialities, validatorPutSpecialities } = require("../validators/specialities");
const router = express.Router();


router.get("/", getSpecialities);

router.get("/:id", validatorIdSpecialities, getSpecialitiesById);

router.delete("/:id", validatorIdSpecialities, deleteSpecialities);

router.put("/:id", validatorIdSpecialities, validatorPutSpecialities, editSpecialities)

router.post("/", validatorCreateSpecialities, createSpecialities)

router.delete("/perma/:id", validatorIdSpecialities, PermaDeleteSpecialities);


module.exports = router
