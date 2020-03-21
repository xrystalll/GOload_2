const Mongoose = require('mongoose')
const Schema = Mongoose.Schema

const MessageSchema = new Schema({
  message: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  userphoto: {
    type: String
  },
  time: {
    type: String,
    required: true
  },
  quote: {
    type: String
  }
})

module.exports = MessageDB = Mongoose.model('Message', MessageSchema)
