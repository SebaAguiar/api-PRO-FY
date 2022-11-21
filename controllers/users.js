const { usersModel } = require('../models');
const fs = require('fs-extra')
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
    const { first_name, last_name, DNI, password, state, city, email, postcode, address, rol, country, image, favorites } = matchedData(req)
    console.log(req.files);
    if (req.files?.image) {
      const result = await uploadImage(req.files.image.tempFilePath)
      console.log(result);
      const userCreated = await usersModel.create({
        first_name: first_name,
        last_name: last_name,
        DNI: DNI,
        password: password,
        state: state,
        city: city,
        email: email,
        postcode: postcode,
        address: address,
        rol: rol,
        country: country,
        favorites: favorites,
        image: { url: result.secure_url, public_id: result.public_id },
      })
      await fs.unlink(req.files.image.tempFilePath)
      res.send(userCreated)
    } else {
      const userCreated = await usersModel.create({
        first_name,
        last_name,
        DNI,
        password,
        state,
        city,
        email,
        postcode,
        address,
        rol,
        country,
        favorites,
        image: { url: image, public_id: "" },
      })
      res.send(userCreated)
    }
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
