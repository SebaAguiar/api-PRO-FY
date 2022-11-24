const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const UserScheme = new mongoose.Schema(
  {
    id: {
      type: mongoose.Types.ObjectId,
    },
    first_name: {
      type: String,
    },
    last_name: {
      type: String,
    },
    DNI: {
      type: Number,
    },
    country: {       //opcional para uso nuestro
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    postcode: {
      type: Number,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
      //unique: true,
    },
    favorites: {  //opcional para uso nuestro
      type: String,
    },
    password: {
      type: String,
      select: false
    },
    // image: {
    //   type: Object,
    // },
    image: {
      url: {
        type: String,
      },
      public_id: {
        type: String,
      },
    },
    role: {  //opcional para uso nuestro
      type: ["user", "admin"],
      default: "user",
    },

    plan: {
      type: ["noSuscription", "basic", "premium"],
      default: "noSuscription",
    },
  },
  {
    temestamps: true,
    versionKey: false,
  }
)
UserScheme.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model("users", UserScheme)
//hans24
