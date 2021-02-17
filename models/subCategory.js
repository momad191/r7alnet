const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const subCategorySchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },    
  mainCategoryID: {
    type: Schema.Types.ObjectId,
    ref: 'categories'
  },  
 
  mainCategoryName: {
    type: String,
    required: true
  },  
  subCategory: {
    type: String,
    required: true
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

module.exports = subCategory = mongoose.model('subCategory', subCategorySchema);
