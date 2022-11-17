const express = require("express");
const { getUsers, createUsers, getUserById, deleteUsers, editUsers, } = require("../controllers/users");
const { useStripe } = require("../controllers/stripe")
const { validatorCreateUser, validatorIdUser, validatorPutUsers } = require("../validators/users");
const autMiddleware = require("../middleware/session");
const router = express.Router();



// router.get("/", autMiddleware, getUsers);

router.get("/", getUsers);

router.get("/:id", validatorIdUser, getUserById);

router.delete("/:id", validatorIdUser, deleteUsers);

router.put("/:id", validatorIdUser, validatorPutUsers, editUsers)

router.post("/", validatorCreateUser, createUsers)

// router.post("/pay", useStripe)






module.exports = router
