const mongoose = require("mongoose");

async function connectMongoDB(url) {
  return mongoose.connect(); 
}


module.exports = {
    connectMongoDB
};