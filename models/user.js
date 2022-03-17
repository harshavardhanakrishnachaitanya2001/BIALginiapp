import mongoose from 'mongoose';
var Schema = mongoose.Schema;

var user = new Schema({
  name: {
    type: String,
    required: true
  },
  phone:{
    type:Number,
    required:true
  },
  email: {
    type: String,
    required: true
  },
  address:{
      type:String,
  },
  password: {
    type: String,
    required: true
  },
});

mongoose.models = {};

var User = mongoose.model('User', user);

export default User;
