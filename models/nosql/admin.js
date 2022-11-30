const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const adminScheme = new mongoose.Schema(

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
    dni: {
      type: String,
    },
    country: {
      type: String,
    },
    state: {
      type: String,
    },
    city: {
      type: String,
    },
    postcode: {
      type: String,
    },
    address: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    contactNumber: {
      type: String,
    },
    password: {
      type: String,
      select: false
    },

    image: {
      url: {
        type: String,
      },
      public_id: {
        type: String,
      },
    },
    role: {
      type: ["manager", "admin"],
      default: "admin",
    },
  },
  {
    temestamps: true,
    versionKey: false,
  }
)
adminScheme.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model("admin", adminScheme)
