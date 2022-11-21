const { handleHttpError } = require('../utils/handleError')

/**
 * Array con los roles permitidos
 * @param {*} role
 * @returns
 *  */

const checkRol = (role) => (req, res, next) => {
  try {
    const { user } = req;
    console.log('====================================');
    console.log({ user });

    console.log('====================================');
    const rolesByUser = user.role;

    const checkValueRol = role.some((rolSingle) => rolesByUser.includes(rolSingle))
    if (!checkValueRol) {
      handleHttpError(res, "NOT_PERMISSION_ALOWED", 403)
      return;
    }
    next()
  } catch (error) {
    handleHttpError(res, "ERROR_PERMISSIONS", 403)
  }
}

module.exports = { checkRol }
//    ["user", "admin"]
