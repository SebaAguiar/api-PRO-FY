const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const ProfessionalScheme = new mongoose.Schema(
  {
    id: {
      type: mongoose.Types.ObjectId,
    },
    first_name: {
      type: String
    },
    last_name: {
      type: String,
    },
    email: {
      type: String,
      unique: true,
    },
    password: {
      type: String,
    },
    dni: {
      type: String,
    },
    professionalId: {
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
    zip: {
      type: String,
    },
    professionalAdress: {
      type: String,
    },
    scheduleDays: {
      type: String,
    },
    scheduleHours: {
      type: String,
    },
    image: {
      url: {
        type: String,
      },
      public_id: {
        type: String,
      },
    },
    modality: {
      type: ["presential", "remote"],
      default: 'presential',
    },
    rating: {
      type: Number,
      min: 0, max: 5
    },
    plan: {
      type: ["noSuscription", "basic", "premium"],
      default: "noSuscription",
    },

    specialities: {
      type: Schema.Types.ObjectId,
      ref: "specialities"

    },


  },

  {
    temestamps: true,
    versionKey: false,
  }

);



// return this.find({ name: new RegExp(name, 'i') });




ProfessionalScheme.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model("professionals", ProfessionalScheme)


