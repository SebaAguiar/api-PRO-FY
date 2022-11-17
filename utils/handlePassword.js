const bcryptjs = require("bcryptjs")

// contraseña sin encriptar ej hans.1234
const encrypt = async (passwordplain) => {
  const hash = await bcryptjs.hash(passwordplain, 10)
  return hash
};


//pasar contraseña sin encriptar y pasar contraseña encriptada

const compare = async (passwordPlain, hashPassword) => {
  return await bcryptjs.compare(passwordPlain, hashPassword)
};

module.exports = { encrypt, compare }
