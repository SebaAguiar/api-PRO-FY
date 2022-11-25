const { usersModel, usersAvatarModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');
const { uploadImage } = require('../config/cloudinaryconfig');
const sharp = require('sharp')
const multer = require('multer')


const storage = multer.memoryStorage();

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image')) {
    cb(null, true)
  } else {
    cb('invalid image file', false)
  }
};

const uploads = multer({ storage, fileFilter })










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


//!==========================================================================




/**
 * Crear un usuario!
 * @param {*} req 
 * @param {*} res 
 */

const createUsersAvatar = async (req, res) => {

  const { first_name, last_name, DNI, password, state, city, email, postcode, address, rol, country, image, favorites } = matchedData(req) //req.body

  const user = await usersAvatarModel({
    first_name, last_name, DNI, password, state, city, email, postcode, address, rol, country, image, favorites,
  })
  await user.save();
  res.json(user)

}

const uploadUsersAvatar = async (req, res) => {
  const { userA } = req;
  if (!userA)
    return res.status(401)
      .json({ success: false, message: 'unauthorized acces!' })
  console.log(req.file);
  try {
    const profileBuffer = req.file.buffer;
    const { width, height } = await sharp(profileBuffer).metadata();
    const avatar = await sharp(profileBuffer)
      .resize(Math.round(width * 0.5), Math.round(height * 0.5))
      .toBuffer()

  } catch (error) {

  }
}
//!==========================================================================







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



module.exports = { getUsers, createUsersAvatar, uploadUsersAvatar, getUserById, deleteUsers, editUsers }
