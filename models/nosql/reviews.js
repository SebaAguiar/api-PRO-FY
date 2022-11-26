const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const ReviewsScheme = new mongoose.Schema(
  {
    id: {
      type: mongoose.Types.ObjectId,
    },
    review: {
      type: String
    },
    users: {
        type: mongoose.Types.ObjectId,
    },
    professionals: {
        type: mongoose.Types.ObjectId,
    },

    response: {
      reviewId: {
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



