const jwt = require('jsonwebtoken')
const JWT_SECRET = process.env.JWT_SECRET


// pasas los datos del usuario
const TokenSing = async (user) => {
  const sign = await jwt.sign(
    {
      _id: user._id,  //el payload de juwt (1ER ARG)
      role: user.rol
    },
    JWT_SECRET,   // LA LLAVE MAESTRA DEL ENV ( SEGUNDO ARGUMENTO DEL JWT)
    {
      expiresIn: "2h"                   //3er argunemto opcional le das una vigencia invetigar bien eso
    },
  );
  return sign
}
// pasas el token de session
const verifyToken = async (tokenJwt) => {
  try {
    return jwt.verify(tokenJwt, JWT_SECRET)
  } catch (error) {
    return null
  }
};


module.exports = { TokenSing, verifyToken }
