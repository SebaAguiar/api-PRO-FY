const express = require("express");
const { getQueries, createQueries, getQueryById, deleteQueries, editQuery, } = require("../controllers/queries");
const { validatorCreateQuery, validatorIdQuery, validatorPutQuery } = require("../validators/queries");
const router = express.Router();



router.get("/", getQueries);

router.get("/:id", validatorIdQuery, getQueryById);

router.delete("/:id", validatorIdQuery, deleteQueries);

router.put("/:id", validatorIdQuery, validatorPutQuery, editQuery)

router.post("/", validatorCreateQuery, createQueries)







module.exports = router
