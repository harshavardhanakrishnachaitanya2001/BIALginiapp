import mongoose from 'mongoose'

const SignupSchema = new mongoose.Schema({
  username: String,
  phone: Number,
  email: String,
  address:String,
  password:String
})

module.exports = mongoose.models.Signup || mongoose.model('Signup', SignupSchema)