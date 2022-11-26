const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const { Scheema } = require('mongoose')
const ReviewsScheme = new mongoose.Schema(
  {
    id: {
      type: mongoose.Types.ObjectId,
    },
    review: {
      type: String
    },
    users: {
        type:Schema.Types.ObjectId,
        ref:"users"
    },
    professionals: {
        type: Schema.Types.ObjectId,
        ref:"professionals"
    },

    response: {
      id: {
        type: mongoose.Types.ObjectId,
      },
      message: {
        typet: String
      }

      //hola
    },
  },
  {
    temestamps: true,
    versionKey: false,
  }

);



ReviewsScheme.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model("reviews", ReviewsScheme)



