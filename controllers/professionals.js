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
    const {
      first_name,
      last_name,
      dni,
      password,
      state,
      city,
      email,
      zip,
      professionaladress,
      professionalId,
      country,
      schedule,
      specialities,
      modality,
    } = matchedData(req);

    let storedImageData = { url: "", public_id: "" };

    if (req.files?.image) {
      const resultImageCloudinary = await uploadImage(
        req.files.image.tempFilePath
      );
      storedImageData = {
        url: resultImageCloudinary.secure_url,
        public_id: resultImageCloudinary.public_id,
      };

      fs.unlink(req.files.image.tempFilePath, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("\nFile deleted");
        }
      });
    }

    if (req.body.image) {
      const extension = req.body.image.split(";")[0].split("/")[1];
      const base64Image = req.body.image.split(";base64,").pop();
      const imageTempFilePath = `./uploads/tempImage.${extension}`;

      fs.writeFile(
        imageTempFilePath,
        base64Image,
        { encoding: "base64" },
        function (err) {
          console.log("File created");
        }
      );

      const resultImageCloudinary = await uploadImage(imageTempFilePath);
      storedImageData = {
        url: resultImageCloudinary.secure_url,
        public_id: resultImageCloudinary.public_id,
      };

      fs.unlink(imageTempFilePath, (error) => {
        if (error) {
          console.log(error);
        } else {
          console.log("\nFile deleted");
        }
      });
    }

    const proCreated = await professionalModel.create({
      first_name,
      last_name,
      dni,
      password,
      state,
      city,
      email,
      zip,
      professionaladress,
      professionalId,
      country,
      schedule,
      specialities,
      modality,
      image: storedImageData,
    });
    console.log('proCreated', proCreated);
    res.send(proCreated);
  } catch (error) {
    console.log('error', error);
    handleHttpError(res, "Error creando al usuario" + error, 500);
  }
};

//holacd 
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
