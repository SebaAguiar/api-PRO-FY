const express = require("express");
const { createItem, getItems, getItemsById, deleteItem, editItem } = require("../controllers/storage");
const router = express.Router()
const uploadMiddleware = require("../utils/handleStorage")
const { validatorGetItem } = require('../validators/storage')




// getItems, createItem, getItemsById, deleteItem, editItem
router.get("/", getItems);

router.get("/:id", getItemsById);

router.delete("/:id", validatorGetItem, deleteItem);

router.put("/:id", validatorGetItem, editItem)




router.post("/", uploadMiddleware.single('myfile'), createItem)







module.exports = router;
