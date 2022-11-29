const express = require("express");
const { getAdmin, getAdminById, createAdmin, deleteAdmin, editAdmin, } = require("../controllers/admin");
const autMiddleware = require("../middleware/session");
const { validatorIdAdmin, validatorPutAdmin, validatorCreateAdmin } = require("../validators/admin");
const router = express.Router();



router.get("/", validatorCreateAdmin, autMiddleware, getAdmin);

//router.get("/", getAdmin);

router.get("/:id", validatorIdAdmin, getAdminById);

router.delete("/:id", validatorIdAdmin, deleteAdmin);

router.put("/:id", validatorIdAdmin, validatorPutAdmin, editAdmin)

router.post("/", validatorCreateAdmin, createAdmin)







module.exports = router
