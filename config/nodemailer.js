const nodemailer = require('nodemailer')

/**
 * Función de transporte
 */

const createTrans = () => {
  const transport = nodemailer.createTransport({
    service: "gmail",
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth: {
      user: "profyarg@gmail.com",
      pass: "Profy1994@"
    }
  })
  return transport;
}


/**
 * Función de envio
 */


const sendMail = async (email) => {
  try {
    const transporter = createTrans()
    const info = await transporter.sendMail({
      from: '"profyarg@gmail.com>',                 //desde quien ej usuario reg correo bienvenida
      to: email,                 //para quien [correo1, correo2]
      subject: "hola bienvenido a Pro-FY",                           //asunto
      html: "<b>hola bienvenido a Pro-FY</b>",                            // msg html body
    })
    console.log("Message sent: %s", info.messageId);
    return
  } catch (error) {
    console.log(error, "tu config se rompio");
  }

}


/**
 * 
 * public functions ( exporta , retornar elementos)
 */

// exports.sendMail = (data) => sendMail(data)
module.exports = {
  createTrans, sendMail
}
