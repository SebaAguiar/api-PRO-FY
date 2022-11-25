const express = require("express");
const { getUsers, createUsersAvatar, getUserById, deleteUsers, editUsers, } = require("../controllers/usersAvatar");
const autMiddleware = require("../middleware/session");
const { validatorIdUsersAvatar, validatorPutUsersAvatar, validatorCreateUsersAvatar } = require("../validators/usersAvatar");
const router = express.Router();



//router.get("/", autMiddleware, getUsers);

router.get("/", getUsers);

router.get("/:id", validatorIdUsersAvatar, getUserById);

router.delete("/:id", validatorIdUsersAvatar, deleteUsers);

router.put("/:id", validatorIdUsersAvatar, validatorPutUsersAvatar, editUsers)

router.post("/", validatorCreateUsersAvatar, createUsersAvatar)







module.exports = router
