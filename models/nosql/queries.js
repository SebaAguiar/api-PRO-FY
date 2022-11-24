const mongoose = require('mongoose')
const { Schema } = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const queriesScheme = new mongoose.Schema(
  {


    id: {
      type: mongoose.Types.ObjectId,
    },
    createdDate: {
      type: String,
    },
    queryDate: {
      type: String,
    },
    queryHour: {
      type: String
    },
    motive: {
      type: String,
    },
    state: {       //opcional para uso nuestro
      type: ['pending', 'resolved'],
      defualt: 'pending'
    },
    users: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "users"
    },
    professionals: {
      type: mongoose.Types.ObjectId,
      required: true,
      ref: "professionals"
    },
  },
  {
    temestamps: true,
    versionKey: false,
  }
)
queriesScheme.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model("queries", queriesScheme)
