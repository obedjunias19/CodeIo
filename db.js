const mongoose = require('mongoose');
const mongoClient = require('mongodb').MongoClient
const mongoURI = 'mongodb://Obed:Test@mongodb.net:27017/testDb'
mongoose.Promise = global.Promise;
let isConnected

module.exports = connectToDatabase = () => {
  if (isConnected) {
    console.log('=> using existing database connection');
    return Promise.resolve();
  }

  return mongoClient.connect(mongoURI, { 
    useNewUrlParser: true , 
    useMongoClient: true
  }).then(db => { 
      isConnected = db
      console.log('=> using new database connection');
      return db
    }).catch(err => {
      console.log(err)
    })
};