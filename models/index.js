const models = {
  usersModel: require('./nosql/users'),
  storageModel: require('./nosql/storage'),
  professionalsModel: require('./nosql/professionals'),
  specialitiesModel: require("./nosql/specialities"),
  queriesModel: require('./nosql/queries'),
  reviewsModel: require("./nosql/reviews"),
  usersAvatarModel: require('./nosql/users'),

  // responsesModel: require("./nosql/responses")

}



module.exports = models
