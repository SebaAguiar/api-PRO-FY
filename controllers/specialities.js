const { specialitiesModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');



/**
 *  Obtener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */
const getSpecialities = async (req, res) => {
  try {
    const data = await specialitiesModel.find({});
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error_get_items")
  }
}

/**
 *  Obtener un detalle!
 * @param {*} req 
 * @param {*} res 
 */
const getSpecialitiesById = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    // console.log(id)
    const data = await specialitiesModel.findById(id)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error id especialidad")

  }
}

/**
 * Crear un usuario!
 * @param {*} req 
 * @param {*} res 
 */

const createSpecialities = async (req, res) => {
  try {

    const body = matchedData(req)
    const data = await specialitiesModel.create(body)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error creando la especialidad")
  }
}
/**
 * Borrar un uruario!
 * @param {*} req 
 * @param {*} res 
 */
const deleteSpecialities = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    // console.log(id)
    const data = await specialitiesModel.delete({ _id: id })
    res.send({ data })
  } catch (error) {
    console.log(error);
    handleHttpError(res, "Error borrando la especialidad")
  }
}

/**
 *  actualizar un usuario!
 * @param {*} req 
 * @param {*} res 
 */
const editSpecialities = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req)
    console.log(id, body,);
    const data = await specialitiesModel.findByIdAndUpdate(
      id, body,
    )
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error editando la especialidad")
  }
}

const PermaDeleteSpecialities = async (req, res) => {
  const { id } = req.params;
  console.log(id);
  try {
    const restored = await specialitiesModel.findByIdAndRemove({ _id: id });
    res.status(200).send(restored);
  } catch (error) {
    res.status(400).send(error.message);
  }
};




module.exports = { getSpecialities, createSpecialities, getSpecialitiesById, deleteSpecialities, editSpecialities, PermaDeleteSpecialities }
