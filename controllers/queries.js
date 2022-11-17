const { queriesModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');



/**
 *  Obtener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */
const getQueries = async (_req, res) => {
  try {
    const data = await queriesModel.find({}).populate("users").populate("professionals")
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error_get_queries")
  }
}

/**
 *  Obtener un detalle!
 * @param {*} req 
 * @param {*} res 
 */
const getQueryById = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    console.log(id)
    const data = await queriesModel.findById(id).populate("users").populate("professionals")
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

const createQueries = async (req, res) => {
  try {
    const body = matchedData(req)
    // console.log(body, bodyClean);
    const data = await queriesModel.create(body)
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
const deleteQueries = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    console.log(id)
    const data = await queriesModel.delete({ _id: id })
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
const editQuery = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req)

    const data = await queriesModel.findByIdAndUpdate(
      id, body,
    )
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error editando al usuario")
  }
}



module.exports = { getQueries, createQueries, getQueryById, deleteQueries, editQuery }
