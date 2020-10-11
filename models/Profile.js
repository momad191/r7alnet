const mongoose = require('mongoose');

const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'user'
  },      
  company: {
    type: String
  },
  department: {  
    type: String
  },
  location: {
    type: String
  }, 
  status: {
    type: String,
    required: true
  },
  skills: {
    type: [String],
    required: true
  },
  bio: {
    type: String
  },
  githubusername: {
    type: String
  },
  experience: [
    {
      title: {
        type: String,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      location: {
        type: String
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    }
  ], 
  education: [ 
    {
   
      school: {
        type: String,
        required: true
      },
      degree: {
        type: String,
        required: true
      },
      fieldofstudy: {
        type: String,
        required: true
      },
      from: {
        type: Date,
        required: true
      },
      to: {
        type: Date
      },
      current: {
        type: Boolean,
        default: false
      },
      description: {
        type: String
      }
    } 
  ],
    
  spost: [   
    {
    first_name: {
      type: String
    },
    last_name: {
      type: String
    },
    year: {
      type: String
    },
    title_article: {
      type: String,
      required: true
    },
    title_journal: {
      type: String
    },
    
    volume: {
      type: String
    },
    pages: {
      type: String
    },
    DOI: {
      type: String
    },
    ISSN: {
      type: String
    },
    URL: {
      type: String
    }

  }
  ],

  social: {
    youtube: {
      type: String,
      default: "not chosen yet"
    },
    twitter: {
      type: String,
      default: "not chosen yet"
    },
    facebook: {
      type: String,
      default: "not chosen yet"
    },
    linkedin: {
      type: String,
      default: "not chosen yet"
    },
    github: {
      type: String,
      default: "not chosen yet"
    },
    stackoverflow: {
      type: String,
      default: "not chosen yet"
    },
    researchgate: {
      type: String,
      default: "not chosen yet"
    },
    orcid: {
      type: String,
      default: "not chosen yet"
    },
    website: {
      type: String,
      default: "not chosen yet"
    },
  }, 
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);
