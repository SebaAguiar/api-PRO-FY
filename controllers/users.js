const { usersModel } = require("../models");
const fs = require("fs");
const { handleHttpError } = require("../utils/handleError");
const { matchedData } = require("express-validator");
const { uploadImage } = require("../config/cloudinaryconfig");

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
    res.send({ user, data });
  } catch (error) {
    handleHttpError(res, "Error_get_items");
  }
};

/**
 *  Obtener un detalle!
 * @param {*} req
 * @param {*} res
 */
const getUserById = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    console.log(id);
    const data = await usersModel.findById(id);
    res.send({ data });
  } catch (error) {
    handleHttpError(res, "Error id usuario");
  }
};

/**
 * Crear un usuario!
 * @param {*} req
 * @param {*} res
 */

const createUsers = async (req, res) => {
  try {
    const {
      first_name,
      last_name,
      DNI,
      password,
      state,
      city,
      email,
      postcode,
      address,
      country,
      favorites,
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
      country,
      favorites,
      image: storedImageData,
    });
    console.log('====================================');
    console.log('userCreated', userCreated);
    console.log('====================================');
    res.send(userCreated);
  } catch (error) {
    console.log('error', error);
    handleHttpError(res, "Error creando al usuario" + error, 500);
  }
};


/**
 * Borrar un usuario!
 * @param {*} req
 * @param {*} res
 */
const deleteUsers = async (req, res) => {
  try {
    req = matchedData(req);
    const { id } = req;
    console.log(id);
    const data = await usersModel.delete({ _id: id });
    res.send({ data });
  } catch (error) {
    console.log(error);
    handleHttpError(res, "Error borrando usuario");
  }
};

/**
 *  actualizar un usuario!
 * @param {*} req
 * @param {*} res
 */
const editUsers = async (req, res) => {
  //   try {
  //     const { id, ...body } = matchedData(req);
  //     //console.log(id, body);
  //     const data = await usersModel.findByIdAndUpdate(id, body);
  //     res.send({ data });
  //   } catch (error) {
  //     handleHttpError(res, "Error editando al usuario");
  //   }
  // };
  try {
    const { id, ...body } = matchedData(req);


    if (req.files?.image) {
      const resultImageCloudinary = await uploadImage(
        req.files.image.tempFilePath
      );
      body.storedImageData = {
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

    const userEdited = await usersModel.findByIdAndUpdate({ id, body });
    console.log('userEdited', userEdited);
    res.send(userEdited);
  } catch (error) {
    console.log('error', error);
    handleHttpError(res, "Error creando al usuario" + error, 500);
  }
};

const restoreUser = async (req, res) => {
  const { id } = req.params;
  try {
    const restored = await usersModel.restore({ _id: id });
    res.status(200).send(restored);
  } catch (error) {
    res.status(400).send(error.message);
  }
};






module.exports = { getUsers, createUsers, getUserById, deleteUsers, editUsers, restoreUser };
