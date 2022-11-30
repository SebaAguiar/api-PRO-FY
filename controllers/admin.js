const { adminModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');
const { uploadImage } = require('../config/cloudinaryconfig');


/**
 *  Obtener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */
const getAdmin = async (req, res) => {
  try {
    const user = req.user;
    console.log(`USER ASKING DATA ADMIN: ${user}`);
    const data = await adminModel.find({});
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
const getAdminById = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    console.log(id)
    const data = await adminModel.findById(id)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error id admin")

  }
}


//!==========================================================================




/**
 * Crear un usuario!
 * @param {*} req 
 * @param {*} res 
 */

// const createAdmin = async (req, res) => {
//   try {
//     const {
//       first_name,
//       last_name,
//       dni,
//       password,
//       state,
//       city,
//       email,
//       postcode,
//       address,
//       country,
//       role,
//     } = matchedData(req);
//     //console.log(id, body);
//     const data = await adminModel.create({
//       first_name,
//       last_name,
//       dni,
//       password,
//       state,
//       city,
//       email,
//       postcode,
//       address,
//       country,
//       role,
//     }
//     )
//     res.send({ data })
//   } catch (error) {
//     handleHttpError(res, "Error creando al admin")
//   }
// }
//!==========================================================================







/**
 * Borrar un uruario!
 * @param {*} req 
 * @param {*} res 
 */
const deleteAdmin = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    console.log(id)
    const data = await adminModel.delete({ _id: id })
    res.send({ data })
  } catch (error) {
    console.log(error);
    handleHttpError(res, "Error borrando admin")
  }
}

/**
 *  actualizar un usuario!
 * @param {*} req 
 * @param {*} res 
 */
const editAdmin = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req)
    //console.log(id, body);
    const data = await adminModel.findByIdAndUpdate(
      id, body,
    )
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error editando al admin")
  }
}



module.exports = { getAdmin, getAdminById, deleteAdmin, editAdmin }
