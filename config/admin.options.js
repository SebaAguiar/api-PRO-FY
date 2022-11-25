const AdminBro = require('admin-bro')
const AdminBroMongoose = require('@admin-bro/mongoose')
const users = require('../models/nosql/users')
const professionals = require('../models/nosql/professionals')
const specialities = require('../models/nosql/specialities')

AdminBro.registerAdapter(AdminBroMongoose)



/**@type{AdminBro.AdminBroOptions} */

const options = {
  resources: [
    { resource: users, },
    { resource: professionals, },
    { resource: specialities, },
  ],

}

//1
module.exports = options
