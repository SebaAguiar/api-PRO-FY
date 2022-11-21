const nodemailer = require('nodemailer')

/**
 * Función de transporte
 */

const createTrans = () => {
  const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "5c7d1514fe61e7",
      pass: "a1b2e5f5edb235"
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
      from: '"fred foo"  <foo@example.com>',                 //desde quien ej usuario reg correo bienvenida
      to: email,                 //para quien [correo1, correo2]
      subject: "hola",                           //asunto
      html: "<b>Hello world</b>",                            // msg html body
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
