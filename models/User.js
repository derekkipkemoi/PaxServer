const mongoose = require('mongoose');// import mongoose// extract the schema from that mongoose object
const Schema = mongoose.Schema;// create a new post schema
const userSchema = new Schema({
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  }
});// export the model
module.exports = mongoose.model('User', userSchema);