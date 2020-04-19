const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
  name: { 
    type: String,
    required: true
  },  
  email: {
    type: String,
    required: true,
    //unique: true
  },
  channel: {
    type: String,
    required: true
  },
  subject: {
    type: String
  },
  msg: {
    type: String
  },
   
  date: {
    type: Date,
    default: Date.now
  }
});
 
module.exports = Contact = mongoose.model('contact', contactSchema);
