const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
const categorySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },    
  text: {
    type: String,
    required: true
  },
    
  body: {
    type: String,
    required: true
  },
  image: {
    type: String,
   
  },
 
  section: {
    type: String,
   
  },

  name: {
    type: String
  },
  avatar: {
    type: String
  },
 
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Question = mongoose.model('category', categorySchema);
