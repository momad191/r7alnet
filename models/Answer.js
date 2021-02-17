const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const AnswerSchema = new Schema({
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

  questionid: {
    type: Schema.Types.ObjectId,
    ref: 'competitions'
  },


   choosenAnswer: {
    type: String,
     
  },
 
 
  mainq: {
    type: String,
  },  
   



  AnswerStatus: {
    type: String,
    default:'done'
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

module.exports = Answer = mongoose.model('Answer', AnswerSchema);
