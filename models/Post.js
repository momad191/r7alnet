const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PostSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  text: {
    type: String,
    required: true
  },



  book: {
    type: String
  },
  booklet: {
    type: String
  },
  inbook: {
    type: String
  },
  incollection: {
    type: String
  },
  inproceedings: {
    type: String
  },
  manual: {
    type: String
  },
  mastersthesis: {
    type: String
  },
  misc: {
    type: String
  },
  phdthesis: {
    type: String
  },
  proceedings: {
    type: String
  },
  techreport: {
    type: String
  },
  unpublished: {
    type: String
  },
  address: {
    type: String
  },
  annote: {
    type: String
  },
  author: {
    type: String
  },
  booktitle: {
    type: String
  },
  chapter: {
    type: String
  },
  crossref: {
    type: String
  },
  edition: {
    type: String
  },
  editor: {
    type: String
  },
  howpublished: {
    type: String
  },
  institution: {
    type: String
  },
  journal: {
    type: String
  },
  key: {
    type: String
  },
  month: {
    type: String
  },
  note: {
    type: String
  },
  number: {
    type: String
  },
  organization: {
    type: String
  },
  pages: {
    type: String
  },
  publisher: {
    type: String
  },
  school: {
    type: String
  },
  series: {
    type: String
  },
  title: {
    type: String
  },
  type: {
    type: String
  },
  volume: {
    type: String
  },
  year: {
    type: String
  },
   



   

  name: {
    type: String
  },
  avatar: {
    type: String
  },
  likes: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      }
    }
  ],
  comments: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: 'users'
      },
      text: {
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
    }
  ],
  date: {
    type: Date,
    default: Date.now
  }
});

module.exports = Post = mongoose.model('post', PostSchema);
