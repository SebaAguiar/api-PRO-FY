const { adminModel } = require('../models');
const { handleHttpError } = require('../utils/handleError');
const { matchedData } = require('express-validator');
const { encrypt, compare } = require('../utils/handlePassword');
const { TokenSing } = require('../utils/handleJwt');


/**
 * Registrar usuario!
 * @param {*} req 
 * @param {*} res 
 */

const registerCtrl = async (req, res) => {
  console.log("entre al register");

  try {
    console.log("entre al try");
    req = matchedData(req)
    console.log(req);
    const email = await (req.email)
    const password = await encrypt(req.password)
    const body = { ...req, password }
    console.log('====================================');
    console.log(body);
    console.log('====================================');

    const dataUser = await adminModel.create(body)
    dataUser.set('password', undefined, { strict: false })

    const data = {
      token: await TokenSing(dataUser),
      user: dataUser
    }
    sendMail.send(email)
    res.send({ data })
  } catch (error) {
    console.log("entre al catch");
    handleHttpError(res, "ERROR_REGISTER_ADMIN")
  }
}


/**
 * login usuario!
 * @param {*} req 
 * @param {*} res 
 */

const loginCtrl = async (req, res) => {
  try {
    req = matchedData(req)
    const admin = await adminModel.findOne({ email: req.email }).select('password first_name last_name role email')
    console.log('====================================');
    console.log(admin);
    console.log('====================================');
    if (!admin) {
      handleHttpError(res, "USER_NOT_EXIST", 404)
      return
    }

    const hashPassword = admin.get('password');
    const check = await compare(req.password, hashPassword)

    if (!check) {
      handleHttpError(res, "PASSWORD_INVALID", 401)
      return
    }
    admin.set('password', undefined, { strict: false })
    const data = {
      token: await TokenSing(admin),
      admin
    }

    res.send({ data })

  } catch (error) {
    console.log(error);
    handleHttpError(res, "ERROR_LOGIN_USER")

  }
}


module.exports = { registerCtrl, loginCtrl }
