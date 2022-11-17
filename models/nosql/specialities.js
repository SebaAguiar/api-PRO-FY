const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const SpecialitiesScheme = new mongoose.Schema(

  {
    id: {
      type: mongoose.Types.ObjectId,
    },
    name: {
      type: String,
      unique: true
    },

  },
  {
    timestamps: true,
    versionKey: false
  }

);
SpecialitiesScheme.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model("specialities", SpecialitiesScheme)
