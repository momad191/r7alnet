const mongoose = require('mongoose');

const msgSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true
  },  
  email: {
    type: String,
    required: true,
  },

  title: {
    type: String,
    required: true,
  },

  msg: {
    type: String,
    required: true,
    
  },
  
  date: {
    type: Date,
    default: Date.now
  }
});
 
module.exports = Contact = mongoose.model('Msg', msgSchema);
