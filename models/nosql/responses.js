const mongoose = require('mongoose')
const mongooseDelete = require('mongoose-delete')
const responsesScheme = new mongoose.Schema(
  {
    id: {
      type: mongoose.Types.ObjectId,
    },
    response: {
      type: String
    },
    review: {
      reviewId: mongoose.Types.ObjectId,
      required: true,
      ref: "reviews"
    },
  })
//hola
reviewsScheme.plugin(mongooseDelete, { overrideMethods: 'all' })
module.exports = mongoose.model("responses", responsesScheme)
