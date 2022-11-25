const express = require("express");
const { getUsers, createUsers, getUserById, deleteUsers, editUsers, } = require("../controllers/users");
const { useStripe } = require("../controllers/stripe")
const { validatorCreateUser, validatorIdUser, validatorPutUsers } = require("../validators/users");
const autMiddleware = require("../middleware/session");
const { checkRol } = require("../middleware/rol");
const router = express.Router();


//el checkRol: en el array significa que solo esos usuarios pueden acceder a esa ruta, pensar admin pro y user como armar el esquema?

//router.get("/", validatorCreateUser, autMiddleware, getUsers); //poner validador personalizado para la revision de datos


//no mover
router.get("/", getUsers);

router.get("/:id", validatorIdUser, getUserById);

router.delete("/:id", validatorIdUser, deleteUsers);

router.put("/:id", validatorIdUser, validatorPutUsers, editUsers)

router.post("/", validatorCreateUser, createUsers)

// router.post("/payUserBasic", useStripeUsersBasic)

// router.post("/payUserPremium", useStripeUsersPremium)

// checkRol(["admin"])




module.exports = router
