const { reviewsModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');



/**
 *  Obtener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */
const getReviews = async (req, res) => {
  try {
    const data = await reviewsModel.find({}).populate("users").populate("professionals");
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error_get_reviews")
  }
}

/**
 *  Obtener un detalle!
 * @param {*} req 
 * @param {*} res 
 */
const getReviewById = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    console.log(id)
    const data = await reviewsModel.findById(id).populate("users").populate("professionals");
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error id review")

  }
}

/**
 * Crear un usuario!
 * @param {*} req 
 * @param {*} res 
 */

const createReview = async (req, res) => {
  try {
    const body = matchedData(req)
    // console.log(body, bodyClean);
    const data = await reviewsModel.create(body)
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error creando al review")
  }
}
/**
 * Borrar un uruario!
 * @param {*} req 
 * @param {*} res 
 */
const deleteReview = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    console.log(id)
    const data = await reviewsModel.delete({ _id: id })
    res.send({ data })
  } catch (error) {
    console.log(error);
    handleHttpError(res, "Error borrando review")
  }
}

/**
 *  actualizar un usuario!
 * @param {*} req 
 * @param {*} res 
 */
const editReview = async (req, res) => {
  try {
    const { id, ...body } = matchedData(req)

    const data = await reviewsModel.findByIdAndUpdate(
      id, body,
    )
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error editando al review")
  }
}



module.exports = { getReviews, createReview, getReviewById, deleteReview, editReview }
