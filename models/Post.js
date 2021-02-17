const mongoose = require('mongoose');
const Schema = mongoose.Schema;
 
const PostSchema = new Schema({
 // _id: mongoose.Schema.Types.ObjectId,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },  
          
  title: {
    type: String
  },
  
  Publish: {
    type: String
  }, 

  body: {
    type: String
  }, 
  CategoryName : {
    type: String
  },   
  Categoryid : {
    type: Schema.Types.ObjectId,
    ref: 'categories'
  }, 
  SubName : {
    type: String
  }, 
  Subid : {
    type: Schema.Types.ObjectId,
    ref: 'subcategories'
  }, 
 
  video : {
    type: String
  }, 
 
  Keywords : {
    type: String
  }, 
  short : { 
    type: String
  }, 
  Main_paragraph : {
    type: String
  }, 
  image : {
    type: String
  }, 
  

 
  
  title1 : {
    type: String
  }, 
  title2 : {
    type: String
  }, 
  title3 : {
    type: String
  }, 
  title4 : {
    type: String
  }, 
  title5 : {
    type: String
  }, 
  title6 : {
    type: String
  }, 
  title7 : {
    type: String
  }, 
  title8 : {
    type: String
  }, 
  title9 : {
    type: String
  }, 
  title10 : {
    type: String
  }, 
  title11 : {
    type: String
  }, 
  title12 : {
    type: String
  }, 
  title13 : {
    type: String
  }, 
  title14 : {
    type: String
  }, 
  title15 : {
    type: String
  }, 
  title16 : {
    type: String
  }, 
  title17 : {
    type: String
  }, 
  title18 : {
    type: String
  }, 
  title19 : {
    type: String
  }, 
  title20 : {
    type: String
  }, 
  title21 : {
    type: String
  }, 
  title22 : {
    type: String
  }, 
  title23 : {
    type: String
  }, 
  title24 : {
    type: String
  }, 
  title25 : {
    type: String
  }, 
  title26 : {
    type: String
  }, 
  title27 : {
    type: String
  }, 
  title28 : {
    type: String
  }, 
  title29 : {
    type: String
  }, 
  title30 : {
    type: String
  }, 



  Paragraph1 : {
    type: String
  }, 
  Paragraph2 : {
    type: String
  }, 
  Paragraph3 : {
    type: String
  }, 
  Paragraph4 : {
    type: String
  }, 
  Paragraph5 : {
    type: String
  }, 
  Paragraph6 : {
    type: String
  }, 
  Paragraph7 : {
    type: String
  }, 
  Paragraph8 : {
    type: String
  }, 
  Paragraph9 : {
    type: String
  }, 
  Paragraph10 : {
    type: String
  }, 
  Paragraph11 : {
    type: String
  }, 
  Paragraph12 : {
    type: String
  }, 
  Paragraph13 : {
    type: String
  }, 
  Paragraph14 : {
    type: String
  }, 
  Paragraph15 : {
    type: String
  }, 
  Paragraph16 : {
    type: String
  }, 
  Paragraph17 : {
    type: String
  }, 
  Paragraph18 : {
    type: String
  }, 
  Paragraph19 : {
    type: String
  }, 
  Paragraph20 : {
    type: String
  }, 
  Paragraph21 : {
    type: String
  }, 
  Paragraph22 : {
    type: String
  }, 
  Paragraph23 : {
    type: String
  }, 
  Paragraph24 : {
    type: String
  }, 
  Paragraph25 : {
    type: String
  }, 
  Paragraph26 : {
    type: String
  }, 
  Paragraph27 : {
    type: String
  }, 
  Paragraph28 : {
    type: String
  }, 
  Paragraph29 : {
    type: String
  }, 
  Paragraph30 : {
    type: String
  }, 


  pic1 : {
    type: String
  }, 
  pic2 : {
    type: String
  }, 
  pic3 : {
    type: String
  }, 
  pic4 : {
    type: String
  }, 
  pic5 : {
    type: String
  }, 
  pic6 : {
    type: String
  }, 
  pic7 : {
    type: String
  }, 
  pic8 : {
    type: String
  }, 
  pic9 : {
    type: String
  }, 
  pic10 : {
    type: String
  }, 
  pic11 : {
    type: String
  }, 
  pic12 : {
    type: String
  }, 
  pic13 : {
    type: String
  }, 
  pic14 : {
    type: String
  }, 
  pic15 : {
    type: String
  }, 
  pic16 : {
    type: String
  }, 
  pic17 : {
    type: String
  }, 
  pic18 : {
    type: String
  }, 
  pic19 : {
    type: String
  }, 
  pic20 : {
    type: String
  }, 
  pic21: {
    type: String
  }, 
  pic22: {
    type: String
  }, 
  pic23: {
    type: String
  }, 
  pic24: {
    type: String
  }, 
  pic25: {
    type: String
  }, 
  pic26: {
    type: String
  }, 
  pic27: {
    type: String
  }, 
  pic28: {
    type: String
  }, 
  pic29: {
    type: String
  }, 
  pic30: {
    type: String
  }, 



  link1: {
    type: String
  }, 
  link2: {
    type: String
  }, 
  link3: {
    type: String
  }, 
  link4: {
    type: String
  }, 
  link5: {
    type: String
  }, 
  link6: {
    type: String
  }, 
  link7: {
    type: String
  }, 
  link8: {
    type: String
  }, 
  link9: {
    type: String
  }, 
  link10: {
    type: String
  }, 
  link11: {
    type: String
  }, 
  link12: {
    type: String
  }, 
  link13: {
    type: String
  }, 
  link14: {
    type: String
  }, 
  link15: {
    type: String
  }, 
  link16: {
    type: String
  }, 
  link17: {
    type: String
  }, 
  link18: {
    type: String
  }, 
  link19: {
    type: String
  }, 
  link20: {
    type: String
  }, 
  link21: {
    type: String
  }, 
  link22: {
    type: String
  }, 
  link23: {
    type: String
  }, 
  link24: {
    type: String
  }, 
  link25: {
    type: String
  }, 
  link26: {
    type: String
  }, 
  link27: {
    type: String
  }, 
  link28: {
    type: String
  }, 
  link29: {
    type: String
  }, 
  link30: {
    type: String
  }, 


 


  lt1: {
    type: String
  }, 
  lt2: {
    type: String
  }, 
  lt3: {
    type: String
  }, 
  lt4: {
    type: String
  }, 
  lt5: {
    type: String
  }, 
  lt6: {
    type: String
  }, 
  lt7: {
    type: String
  }, 
  lt8: {
    type: String
  }, 
  lt9: {
    type: String
  }, 
  lt10: {
    type: String
  }, 
  lt11: {
    type: String
  }, 
  lt12: {
    type: String
  }, 
  lt13: {
    type: String
  }, 
  lt14: {
    type: String
  }, 
  lt15: {
    type: String
  }, 
  lt16: {
    type: String
  }, 
  lt17: {
    type: String
  }, 
  lt18: {
    type: String
  }, 
  lt19: {
    type: String
  }, 
  lt20: {
    type: String
  }, 
  lt21: {
    type: String
  }, 
  lt22: {
    type: String
  }, 
  lt23: {
    type: String
  }, 
  lt24: {
    type: String
  }, 
  lt25: {
    type: String
  }, 
  lt26: {
    type: String
  }, 
  lt27: {
    type: String
  }, 
  lt28: {
    type: String
  }, 
  lt29: {
    type: String
  }, 
  lt30: {
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
