const mongoose = require('mongoose')
require('dotenv').config()

mongoose.connect("mongodb+srv://carolinekonrad9:Tannerrocks1@be-rest-rant.x67x72k.mongodb.net/rest-rant", {
  useNewUrlParser: true, 
  useUnifiedTopology: true
})

module.exports.Place = require('./modelsPlaces')
module.exports.Comment = require('./comment')