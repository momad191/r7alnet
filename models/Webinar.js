const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const WebinarSchema = new Schema({
    _id: mongoose.Schema.Types.ObjectId,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'user'
      },
      name: {
        type: String
      },
      avatar: {
        type: String
      },

      Surname : {
        type: String
    },

    first_name : {
        type: String
    },

    Title : {
        type: String
    },

    Gender : {
        type: String
    },

    Email : {
        type: String
    },

    Website: {
        type: String
    },

    Phone: {
        type: String
    },

    Academic_affiliation : {
        type: String
    },

    Country : {
        type: String
    },

    Nationality: {
        type: String
    },

    Key_academic: {
        type: String
    },
 
    Research_Field: {
        type: String
    },

    Specialization : {
        type: String
    },

    Potential_talk_title: {
        type: String
    },

    other_information: {
        type: String
    },

    date: {
        type: Date,
        default: Date.now
      },

    WebinarImg: {
        type: String
    }
});

module.exports = mongoose.model('Webinar', WebinarSchema)
