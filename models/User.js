const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
   
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
   
  avatar: {
    type: String
  },
  cv: {
    type: String,
    default: "no uploaded cv"
     
  },
  refuser: {
    type: String,
    default: "system"
     
  },
  country: {
    type: String,
    
      
  },
  validity: {
    type: String,
    default: "normal"
  }, 
  
  date: {
    type: Date,
    default: Date.now
  },
  resetToken: {
    type: String,
  },
  expireToken: {
    type: Date
  }
    
});

module.exports = User = mongoose.model('user', UserSchema);
