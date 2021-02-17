const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const CompetitionSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },    

  articleid: {
    type: Schema.Types.ObjectId,
    ref: 'posts'
  },  

  articletitle: {
    type: String,
    ref: 'posts'
  }, 
 
  mainq: {
    type: String,
    required: true
  },  

  a1: {
    type: String,
    required: true
  },
  a2: {
    type: String,
   
  },
  a3: {
    type: String,
    required: true
  },
  a4: {
    type: String,
    required: true
  },


  i1: {
    type: String,
    default:'no'
  
  },
 
  i2: {
    type: String,
    default:'no'
    
  },
  i3: {
    type: String,
    default:'no'
    
  },
  i4: {
    type: String,
    default:'no'
   
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

module.exports = Competition = mongoose.model('Competition', CompetitionSchema);
