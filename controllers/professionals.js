const { professionalsModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');



/***
 *  Obtener lista de la base de datos!/
 * @param {*} req 
 * @param {*} res 
 */
const getAllProfessionals = async (req, res) => {
  try {

    const data = await professionalsModel.find({}).populate("specialities")

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
const getProfessionalById = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    // console.log(id)
    const data = await professionalsModel.findById(id).populate("specialities")
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error id profesional")

  }
}

/**
 *  Obtener lista de la base de datos!
 * @param {*} req 
 * @param {*} res 
 */


const createProfessional = async (req, res) => {
  try {
    const body = matchedData(req)
    // console.log(body);
    const data = await professionalsModel.create(body)

    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error creando al profesional")
  }
}
/**
 *  crear un registro!
 * @param {*} req 
 * @param {*} res 
 */
const deleteProfessional = async (req, res) => {
  try {
    req = matchedData(req)
    const { id } = req
    // console.log(id)
    const data = await professionalsModel.delete({ _id: id })
    res.send({ data })
  } catch (error) {
    handleHttpError(res, "Error borrando al profesional")

  }

}
/**
 *  actualizar un registro!
 * @param {*} req 
 * @param {*} res 
 */
const editProfessional = async (req, res) => {
  try {

    const { id } = req.params

    const { ...body } = matchedData(req)
    console.log("iniciooooooooo");
    console.log(id, body)
    console.log("finalllllllllll");
    const data = await professionalsModel.findByIdAndUpdate(id, body)
    console.log(data)
    res.send({ data })
  } catch (error) {
    console.log(error);
    handleHttpError(res, "Error editando al profesional")
  }

  //478c  eusebio enviado => raul

}



module.exports = { getAllProfessionals, createProfessional, getProfessionalById, deleteProfessional, editProfessional }
