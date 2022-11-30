const models = {
  usersModel: require('./nosql/users'),
  professionalsModel: require('./nosql/professionals'),
  specialitiesModel: require("./nosql/specialities"),
  queriesModel: require('./nosql/queries'),
  reviewsModel: require("./nosql/reviews"),
  adminModel: require('./nosql/admin'),

  // responsesModel: require("./nosql/responses")

}



module.exports = models
