const mongoose = require('mongoose');
const Schema = mongoose.Schema;
  
const LuminariesSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
      L_name: {
        type: String
      },
      L_specialty: {
        type: String
      },

      L_contribution : {
        type: String
    },

    L_date: {
        type: Date,
        default: Date.now
    },
 
    L_Website: {
        type: String
    },

    L_biography: {
        type: String
    },

      L_Img: {
        type: String
    }
});

module.exports = mongoose.model('Luminaries', LuminariesSchema)
