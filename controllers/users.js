const { usersModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');
const { uploadImage } = require('../config/cloudinaryconfig');



/**
 *  Obtener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */
const getUsers = async (req, res) => {
  try {
    const user = req.user;
    console.log(`USER ASKING DATA: ${user}`);
    const data = await usersModel.find({});
    res.send({ user, data })
  } catch (error) {
    handleHttpError(res, "Error_get_items")
  }
}

/**
 *  Obtener un detalle!
 * @param {*} req 
 * @param {*} res 
 */
const getUserById = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    console.log(id)
    const data = await usersModel.findById(id)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error id usuario")

  }
}

/**
 * Crear un usuario!
 * @param {*} req 
 * @param {*} res 
 */

const createUsers = async (req, res) => {
  try {
    const body = matchedData(req)
    console.log(req.files);
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath)
      console.log(result);
    }

    const data = await usersModel.create(body)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error creando al usuario")
  }
}
/**
 * Borrar un uruario!
 * @param {*} req 
 * @param {*} res 
 */
const deleteUsers = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    console.log(id)
    const data = await usersModel.delete({ _id: id })
    res.send({ data })
  } catch (error) {
    console.log(error);
    handleHttpError(res, "Error borrando usuario")
  }
}

/**
 *  actualizar un usuario!
 * @param {*} req 
 * @param {*} res 
 */
const editUsers = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req)
    //console.log(id, body);
    const data = await usersModel.findByIdAndUpdate(
      id, body,
    )
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error editando al usuario")
  }
}



module.exports = { getUsers, createUsers, getUserById, deleteUsers, editUsers }
