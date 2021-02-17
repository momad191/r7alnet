const express = require('express');
const router = express.Router(); 
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');
const multer = require('multer'); 
const Post = require('../../models/Post');
const Profile = require('../../models/Profile');
const User = require('../../models/User');
const escapeRegex = require('../../regex-escape')
const mongoose = require('mongoose'); 
const uuidv4 = require('uuid/v4');
const cloudinary = require('cloudinary').v2;
const DIR = './public/';

cloudinary.config({
  cloud_name: "momad191",
  api_key: "569326899647897",
  api_secret: "OGnEPD07ZzKxlk2WeATnuGShhNw",
});


const storage = multer.diskStorage({
  destination: (req, file, cb) => {
      cb(null, DIR);
  },
  filename: (req, file, cb) => {
      const fileName = file.originalname.toLowerCase().split(' ').join('-');
      cb(null, uuidv4() + '-' + fileName)
  }
});

var upload = multer({
  storage: storage,
  fileFilter: (req, file, cb) => {
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg") {
          cb(null, true);
      } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg and .jpeg format allowed!'));
      }
  }
});

// @route    POST api/posts
// @desc     Create a post
// @access   Private
router.post(
  '/',
  [
    auth,
    [
      check('title', 'Text is required')
        .not()
        .isEmpty()
    ]
  ], 
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    } 
    
    try {
      const user = await User.findById(req.user.id).select('-password');

        

      const newPost = new Post({
        title: req.body.title,
        Publish: req.body.Publish,
        body: req.body.body,
         
        CategoryName: req.body.CategoryName,
        Categoryid: req.body.Categoryid,

        SubName: req.body.SubName,
        Subid: req.body.Subid,

        video: req.body.video,
        Keywords: req.body.Keywords,
        short: req.body.short,
        Main_paragraph: req.body.Main_paragraph,
        image: req.body.image,

        title1: req.body.title1,
        title2: req.body.title2,
        title3: req.body.title3,
        title4: req.body.title4,
        title5: req.body.title5,
        title6: req.body.title6,
        title7: req.body.title7,
        title8: req.body.title8,
        title9: req.body.title9,
        title10: req.body.title10,
        title11: req.body.title11,
        title12: req.body.title12,
        title13: req.body.title13,
        title14: req.body.title14,
        title15: req.body.title15,
        title16: req.body.title16,
        title17: req.body.title17,
        title18: req.body.title18,
        title19: req.body.title19,
        title20: req.body.title20,
        title21: req.body.title21,
        title22: req.body.title22,
        title23: req.body.title23,
        title24: req.body.title24,
        title25: req.body.title25,
        title26: req.body.title26,
        title27: req.body.title27,
        title28: req.body.title28,
        title29: req.body.title29,
        title30: req.body.title30,

        

        Paragraph1: req.body.Paragraph1,
        Paragraph2: req.body.Paragraph2,
        Paragraph3: req.body.Paragraph3,
        Paragraph4: req.body.Paragraph4,
        Paragraph5: req.body.Paragraph5,
        Paragraph6: req.body.Paragraph6,
        Paragraph7: req.body.Paragraph7,
        Paragraph8: req.body.Paragraph8,
        Paragraph9: req.body.Paragraph9,
        Paragraph10: req.body.Paragraph10,
        Paragraph11: req.body.Paragraph11,
        Paragraph12: req.body.Paragraph12,
        Paragraph13: req.body.Paragraph13,
        Paragraph14: req.body.Paragraph14,
        Paragraph15: req.body.Paragraph15,
        Paragraph16: req.body.Paragraph16,
        Paragraph17: req.body.Paragraph17,
        Paragraph18: req.body.Paragraph18,
        Paragraph19: req.body.Paragraph19,
        Paragraph20: req.body.Paragraph20,
        Paragraph21: req.body.Paragraph21,
        Paragraph22: req.body.Paragraph22,
        Paragraph23: req.body.Paragraph23,
        Paragraph24: req.body.Paragraph24,
        Paragraph25: req.body.Paragraph25,
        Paragraph26: req.body.Paragraph26,
        Paragraph27: req.body.Paragraph27,
        Paragraph28: req.body.Paragraph28,
        Paragraph29: req.body.Paragraph29,
        Paragraph30: req.body.Paragraph30,



        pic1: req.body.pic1,
        pic2: req.body.pic2,
        pic3: req.body.pic3,
        pic4: req.body.pic4,
        pic5: req.body.pic5,
        pic6: req.body.pic6,
        pic7: req.body.pic7,
        pic8: req.body.pic8,
        pic9: req.body.pic9,
        pic10: req.body.pic10,
        pic11: req.body.pic11,
        pic12: req.body.pic12,
        pic13: req.body.pic13,
        pic14: req.body.pic14,
        pic15: req.body.pic15,
        pic16: req.body.pic16,
        pic17: req.body.pic17,
        pic18: req.body.pic18,
        pic19: req.body.pic19,
        pic20: req.body.pic20,
        pic21: req.body.pic21,
        pic22: req.body.pic22,
        pic23: req.body.pic23,
        pic24: req.body.pic24,
        pic25: req.body.pic25,
        pic26: req.body.pic26,
        pic27: req.body.pic27,
        pic28: req.body.pic28,
        pic29: req.body.pic29,
        pic30: req.body.pic30,



        link1: req.body.link1,
        link2: req.body.link2,
        link3: req.body.link3,
        link4: req.body.link4,
        link5: req.body.link5,
        link6: req.body.link6,
        link7: req.body.link7,
        link8: req.body.link8,
        link9: req.body.link9,
        link10: req.body.link10,
        link11: req.body.link11,
        link12: req.body.link12,
        link13: req.body.link13,
        link14: req.body.link14,
        link15: req.body.link15,
        link16: req.body.link16,
        link17: req.body.link17,
        link18: req.body.link18,
        link19: req.body.link19,
        link20: req.body.link20,
        link21: req.body.link21,
        link22: req.body.link22,
        link23: req.body.link23,
        link24: req.body.link24,
        link25: req.body.link25,
        link26: req.body.link26,
        link27: req.body.link27,
        link28: req.body.link28,
        link29: req.body.link29,
        link30: req.body.link30,


        lt1: req.body.lt1,
        lt2: req.body.lt2,
        lt3: req.body.lt3,
        lt4: req.body.lt4,
        lt5: req.body.lt5,
        lt6: req.body.lt6,
        lt7: req.body.lt7,
        lt8: req.body.lt8,
        lt9: req.body.lt9,
        lt10: req.body.lt10,
        lt11: req.body.lt11,
        lt12: req.body.lt12,
        lt13: req.body.lt13,
        lt14: req.body.lt14,
        lt15: req.body.lt15,
        lt16: req.body.lt16,
        lt17: req.body.lt17,
        lt18: req.body.lt18,
        lt19: req.body.lt19,
        lt20: req.body.lt20,
        lt21: req.body.lt21,
        lt22: req.body.lt22,
        lt23: req.body.lt23,
        lt24: req.body.lt24,
        lt25: req.body.lt25,
        lt26: req.body.lt26,
        lt27: req.body.lt27,
        lt28: req.body.lt28,
        lt29: req.body.lt29,
        lt30: req.body.lt30,


 


    
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);
 
  

// @route    GET api/posts
// @desc     Get all posts
// @access   Private
router.get('/', auth, async (req, res) => {
  try {
    const posts = await Post.find().sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

 




router.get('/topics', async (req, res) => {
  try {
    const posts = await Post.find({Publish:"yes"}).sort({ date: -1 });
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

 
// @route    GET api/posts/topics
// @desc     Get all topics 
// @access   Private 
//----------------------------------------
router.get('/topics11/:Categoryid', async (req, res) => {
  try {
    const posts = await Post.find({ Categoryid: req.params.Categoryid,Publish:"yes"})
    .sort({ date: -1 })
    .populate('categories', ['body', 'text']);
     
    ;
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



router.get('/PrivacyPolicy', async (req, res) => {
  try {
    const posts = await Post.find({ body:"PrivacyPolicy"})
     //.sort({ date: -1 })
     // .populate('categories', ['body', 'text']);
     
    ;
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


router.get('/Social', async (req, res) => {
  try {
    const posts = await Post.find({ body:"SocialMediaLinks"})
     //.sort({ date: -1 })
     // .populate('categories', ['body', 'text']);
     
    ;
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});




router.get('/AboutUs', async (req, res) => {
  try {
    const posts = await Post.find({ body:"about"})
     //.sort({ date: -1 })
     // .populate('categories', ['body', 'text']);
     
    ;
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});



router.get('/topicsSide/', async (req, res) => {
  try {
    const posts = await Post.find({Publish:"yes"})
    ;
     
    ;
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  } 
});
// @route    GET api/posts/:id
// @desc     Get post by ID
// @access   Private
router.get('/:id', async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    res.json(post);
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});
 






 
// @route    DELETE api/posts/:id
// @desc     Delete a post
// @access   Private
router.delete('/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check for ObjectId format and post
    if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !post) {
      return res.status(404).json({ msg: 'Post not found' });
    }

    // Check user
    // if (post.user.toString() !== req.user.id) {
    //   return res.status(401).json({ msg: 'User not authorized' });
    // }
 
    await post.remove();

    res.json({ msg: 'Post removed' });
  } catch (err) {
    console.error(err.message);

    res.status(500).send('Server Error');
  }
});
 
// @route    PUT api/posts/like/:id
// @desc     Like a post
// @access   Private
router.put('/like/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length > 0
    ) {
      return res.status(400).json({ msg: 'Post already liked' });
    }

    post.likes.unshift({ user: req.user.id });

    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    PUT api/posts/unlike/:id
// @desc     Like a post
// @access   Private
router.put('/unlike/:id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Check if the post has already been liked
    if (
      post.likes.filter(like => like.user.toString() === req.user.id).length ===
      0
    ) {
      return res.status(400).json({ msg: 'Post has not yet been liked' });
    }

    // Get remove index
    const removeIndex = post.likes
      .map(like => like.user.toString())
      .indexOf(req.user.id);

    post.likes.splice(removeIndex, 1);

    await post.save();

    res.json(post.likes);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/posts/comment/:id
// @desc     Comment on a post
// @access   Private
router.post(
  '/comment/:id',
  [
    auth,
    [
      check('text', 'Text is required')
        .not()
        .isEmpty()
    ]
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      const user = await User.findById(req.user.id).select('-password');
      const post = await Post.findById(req.params.id);

      const newComment = {
        text: req.body.text,
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      };

      post.comments.unshift(newComment);

      await post.save();

      res.json(post.comments);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

// @route    DELETE api/posts/comment/:id/:comment_id
// @desc     Delete comment
// @access   Private
router.delete('/comment/:id/:comment_id', auth, async (req, res) => {
  try {
    const post = await Post.findById(req.params.id);

    // Pull out comment
    const comment = post.comments.find(
      comment => comment.id === req.params.comment_id
    );

    // Make sure comment exists
    if (!comment) {
      return res.status(404).json({ msg: 'Comment does not exist' });
    }

    // Check user
    if (comment.user.toString() !== req.user.id) {
      return res.status(401).json({ msg: 'User not authorized' });
    }

    // Get remove index
    const removeIndex = post.comments
      .map(comment => comment.id)
      .indexOf(req.params.comment_id);

    post.comments.splice(removeIndex, 1);

    await post.save();

    res.json(post.comments);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

 
// @route    GET api/posts/userposts/:user
// @desc     Get posts by user ID
// @access   Public


router.get('/up/up/:id', async (req, res) => {
 
  try {
    const upee = await Post.find({_id:req.params.id});
    res.json(upee);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
  


//************************************************************************ */

router.route('/update/:id').post((req, res) => {
  Post.findById(req.params.id)
    .then(pp => {
      pp.title = req.body.title;
      pp.Publish = req.body.Publish;
      pp.body = req.body.body;

      pp.CategoryName = req.body.CategoryName;
      pp.Categoryid = req.body.Categoryid;

      pp.SubName = req.body.SubName;
      pp.Subid = req.body.Subid;

      pp.video = req.body.video;
      pp.Keywords = req.body.Keywords;
      pp.short = req.body.short;
      pp.Main_paragraph = req.body.Main_paragraph;
      pp.image = req.body.image;

      pp.title1 = req.body.title1;
      pp.title2 = req.body.title2;
      pp.title3 = req.body.title3;
      pp.title4 = req.body.title4;
      pp.title5 = req.body.title5;
      pp.title6 = req.body.title6;
      pp.title7 = req.body.title7;
      pp.title8 = req.body.title8;
      pp.title9 = req.body.title9;
      pp.title10 = req.body.title10;
      pp.title11 = req.body.title11;
      pp.title12 = req.body.title12;
      pp.title13 = req.body.title13;
      pp.title14 = req.body.title14;
      pp.title15 = req.body.title15;
      pp.title16 = req.body.title16;
      pp.title17 = req.body.title17;
      pp.title18 = req.body.title18;
      pp.title19 = req.body.title19;
      pp.title20 = req.body.title20;
      pp.title21 = req.body.title21;
      pp.title22 = req.body.title22;
      pp.title23 = req.body.title23;
      pp.title24 = req.body.title24;
      pp.title25 = req.body.title25;
      pp.title26 = req.body.title26;
      pp.title27 = req.body.title27;
      pp.title28 = req.body.title28;
      pp.title29 = req.body.title29;
      pp.title30 = req.body.title30;


      pp.Paragraph1 = req.body.Paragraph1;
      pp.Paragraph2 = req.body.Paragraph2;
      pp.Paragraph3 = req.body.Paragraph3;
      pp.Paragraph4 = req.body.Paragraph4;
      pp.Paragraph5 = req.body.Paragraph5;
      pp.Paragraph6 = req.body.Paragraph6;
      pp.Paragraph7 = req.body.Paragraph7;
      pp.Paragraph8 = req.body.Paragraph8;
      pp.Paragraph9 = req.body.Paragraph9;
      pp.Paragraph10 = req.body.Paragraph10;
      pp.Paragraph11 = req.body.Paragraph11;
      pp.Paragraph12 = req.body.Paragraph12;
      pp.Paragraph13 = req.body.Paragraph13;
      pp.Paragraph14 = req.body.Paragraph14;
      pp.Paragraph15 = req.body.Paragraph15;
      pp.Paragraph16 = req.body.Paragraph16;
      pp.Paragraph17 = req.body.Paragraph17;
      pp.Paragraph18 = req.body.Paragraph18;
      pp.Paragraph19 = req.body.Paragraph19;
      pp.Paragraph20 = req.body.Paragraph20;
      pp.Paragraph21 = req.body.Paragraph21;
      pp.Paragraph22 = req.body.Paragraph22;
      pp.Paragraph23 = req.body.Paragraph23;
      pp.Paragraph24 = req.body.Paragraph24;
      pp.Paragraph25 = req.body.Paragraph25;
      pp.Paragraph26 = req.body.Paragraph26;
      pp.Paragraph27 = req.body.Paragraph27;
      pp.Paragraph28 = req.body.Paragraph28;
      pp.Paragraph29 = req.body.Paragraph29;
      pp.Paragraph30 = req.body.Paragraph30;


      pp.pic1 = req.body.pic1;
      pp.pic2 = req.body.pic2;
      pp.pic3 = req.body.pic3;
      pp.pic4 = req.body.pic4;
      pp.pic5 = req.body.pic5;
      pp.pic6 = req.body.pic6;
      pp.pic7 = req.body.pic7;
      pp.pic8 = req.body.pic8;
      pp.pic9 = req.body.pic9;
      pp.pic10 = req.body.pic10;
      pp.pic11 = req.body.pic11;
      pp.pic12 = req.body.pic12;
      pp.pic13 = req.body.pic13;
      pp.pic14 = req.body.pic14;
      pp.pic15 = req.body.pic15;
      pp.pic16 = req.body.pic16;
      pp.pic17 = req.body.pic17;
      pp.pic18 = req.body.pic18;
      pp.pic19 = req.body.pic19;
      pp.pic20 = req.body.pic20;
      pp.pic21 = req.body.pic21;
      pp.pic22 = req.body.pic22;
      pp.pic23 = req.body.pic23;
      pp.pic24 = req.body.pic24;
      pp.pic25 = req.body.pic25;
      pp.pic26 = req.body.pic26;
      pp.pic27 = req.body.pic27;
      pp.pic28 = req.body.pic28;
      pp.pic29 = req.body.pic29;
      pp.pic30 = req.body.pic30;



      pp.link1 = req.body.link1;
      pp.link2 = req.body.link2;
      pp.link3 = req.body.link3;
      pp.link4 = req.body.link4;
      pp.link5 = req.body.link5;
      pp.link6 = req.body.link6;
      pp.link7 = req.body.link7;
      pp.link8 = req.body.link8;
      pp.link9 = req.body.link9;
      pp.link10 = req.body.link10;
      pp.link11 = req.body.link11;
      pp.link12 = req.body.link12;
      pp.link13 = req.body.link13;
      pp.link14 = req.body.link14;
      pp.link15 = req.body.link15;
      pp.link16 = req.body.link16;
      pp.link17 = req.body.link17;
      pp.link18 = req.body.link18;
      pp.link19 = req.body.link19;
      pp.link20 = req.body.link20;
      pp.link21 = req.body.link21;
      pp.link22 = req.body.link22;
      pp.link23 = req.body.link23;
      pp.link24 = req.body.link24;
      pp.link25 = req.body.link25;
      pp.link26 = req.body.link26;
      pp.link27 = req.body.link27;
      pp.link28 = req.body.link28;
      pp.link29 = req.body.link29;
      pp.link30 = req.body.link30;




      pp.lt1 = req.body.lt1;
      pp.lt2 = req.body.lt2;
      pp.lt3 = req.body.lt3;
      pp.lt4 = req.body.lt4;
      pp.lt5 = req.body.lt5;
      pp.lt6 = req.body.lt6;
      pp.lt7 = req.body.lt7;
      pp.lt8 = req.body.lt8;
      pp.lt9 = req.body.lt9;
      pp.lt10 = req.body.lt10;
      pp.lt11 = req.body.lt11;
      pp.lt12 = req.body.lt12;
      pp.lt13 = req.body.lt13;
      pp.lt14 = req.body.lt14;
      pp.lt15 = req.body.lt15;
      pp.lt16 = req.body.lt16;
      pp.lt17 = req.body.lt17;
      pp.lt18 = req.body.lt18;
      pp.lt19 = req.body.lt19;
      pp.lt20 = req.body.lt20;
      pp.lt21 = req.body.lt21;
      pp.lt22 = req.body.lt22;
      pp.lt23 = req.body.lt23;
      pp.lt24 = req.body.lt24;
      pp.lt25 = req.body.lt25;
      pp.lt26 = req.body.lt26;
      pp.lt27 = req.body.lt27;
      pp.lt28 = req.body.lt28;
      pp.lt29 = req.body.lt29;
      pp.lt30 = req.body.lt30;






 
 
      
      pp.save()
        .then(() => res.json('تم تعديل المنشور'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



//******************************************************************** */


module.exports = router;
