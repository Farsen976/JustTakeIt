const Db = require('../db/db')
const uuid = require('node-uuid')

const schemaMovie = Db.mongoose.Schema({ 
  _id: { type: String, default: uuid.v4 }, 
  name: String,
  director: String,
  description: String,
  critical: String,
  note: Number
});

const Movies = Db.mongoose.model('Movies', schemaMovie);

module.exports = Movies


// const bd = require('')
// const api = require('../../config/api')

// class Movie {

//     constructor(){

//     }

//     static findOne(){}

//     static findAll(){}
    
// }

// module.exports = Movie