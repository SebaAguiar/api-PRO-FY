const mongoose = require("mongoose")

const dbConnect = () => {

  const DB_URI = process.env.DATABASE_URL;
  mongoose.connect(DB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
    (err, res) => {
      if (!err) {
        console.log('**** CONEXION CORRECTA ****');
      } else {
        console.log('**** ERROR DE CONEXION ****');

      }
    }
  );

};

module.exports = dbConnect
