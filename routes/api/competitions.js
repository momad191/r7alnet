const express = require('express');
const router = express.Router(); 
const { check, validationResult } = require('express-validator/check');
const auth = require('../../middleware/auth');
const multer = require('multer'); 
const Post = require('../../models/Post');
const Competition = require('../../models/Competition');
const Answer = require('../../models/Answer');
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

  
 
 //******************************************************************** */
 
// @route    POST api/competitions/addquestion/:id
// @desc     Create a competition  question 
// @access   Private لانشاء سؤال جديد لموضوع  
router.post(
  '/addquestion/:id',
  [ 
    auth,
    [
      check('mainq', 'السؤال ضروري')
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

      const newCompetition = new Competition({
        articleid: req.body.articleid,
        articletitle: req.body.articletitle,
 
        mainq: req.body.mainq,
 
        a1 :req.body.a1,
        a2 :req.body.a2,
        a3 :req.body.a3,
        a4 :req.body.a4,

        i1 :req.body.i1,
        i2 :req.body.i2,
        i3 :req.body.i3,
        i4 :req.body.i4,

      
       
          
        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });
 
      const competition = await newCompetition.save();

      res.json(competition);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//************************************************************************ */

  
  
// @route    GET api/Competitions/:articleid
// @desc   عرض كل الاسئلة المتعلقة بالموضوع   Get competitions by articleid
// @access   Private لعرض الاسئلة المتعلقة بالموضوع 
router.get('/:articleid', auth, async (req, res) => {
  try {
    const posts = await Competition.find({ articleid: req.params.articleid})
    .sort({ date: -1 })
    
     
    ;
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

  

// @route    GET api/Competitions/:articleid
// @desc   عرض   سؤال واحد  تم اضافته    Get competitions by articleid
// @access   Private لعرض الاسئلة المتعلقة بالموضوع 
router.get('/findOneQuestion/:id', auth, async (req, res) => {
  try {
    const posts = await Competition.findById(req.params.id)
    .sort({ date: -1 })
    
     
    ;
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


 
// @route    GET api/competitions/onequestion/:articleid
// @desc     Get competitions by id
// @access   Private للتعديل على السؤال الواحد
router.get('/onequestion/:id', auth, async (req, res) => {
  try {
    const posts = await Competition.findById(req.params.id)
    .sort({ date: -1 })
    ;
     
    
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
 




//***************************التعديل لسؤال المسابقة********************************************* */

router.route('/update/:id').post((req, res) => {
  Competition.findById(req.params.id)
    .then(pp => {
      pp.mainq = req.body.mainq;
      pp.a1 = req.body.a1;
      pp.a2 = req.body.a2;
      pp.a3 = req.body.a3;
      pp.a4 = req.body.a4;
      
      pp.i1 = req.body.i1;
      pp.i2 = req.body.i2;
      pp.i3 = req.body.i3;
      pp.i4 = req.body.i4;
      

      pp.save()
        .then(() => res.json('تم تعديل سؤال المسابقة'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});




 //*****************************اجابة السؤال الواحد *************************************** */
 
// @route    POST api/competitions/addquestion/:id
// @desc     Create a competition  question 
// @access   Private اجابه السؤال  
router.post(
  '/answerCompetitionQuestion/:id',
  [ 
    auth, 
  ], 
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }       
    try {
      const user = await User.findById(req.user.id).select('-password');

      const newAnswer = new Answer({
        articleid: req.body.articleid,
        articletitle: req.body.articletitle,
        questionid: req.body.questionid,
        
        mainq: req.body.mainq,
        choosenAnswer :req.body.choosenAnswer,
        
      

        name: user.name,
        avatar: user.avatar,
        user: req.user.id
      });
 
      const answer = await newAnswer.save();

      res.json(answer);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

//************************************************************************ */
 

// @route    GET api/Competitions/:articleid
// @desc    عرض الاجابة الواحد للمستخدم لمقارنتها مع السؤال حتى لا يعرض   Get competitions by articleid
// @access   Private  
router.get('/answerCompetitionQuestion/:questionid', auth, async (req, res) => {
  try {
    const posts = await Answer.findOne({ questionid: req.params.questionid,user: req.user.id})
    .sort({ date: -1 })

    ;
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

 
/////////////////////////////////////ادارة الاجوبة والاسئلة للمستخدم ///////////////////////////////////////////

// @route    GET api/Competitions/UserCorrectAnswersCount/
// @desc   مجموع كل الاجوبة الصحيحة للمستخدم    Get competitions by articleid
// @access   Private مجموع الاجوبة الصحيحة 
router.get('/UserCorrectAnswersCount/:user', auth, async (req, res) => {
  try {
    const posts = await Answer.find({ choosenAnswer:'yes',user: req.params.user})
    .sort({ date: -1 })
     
     
    ;
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});




// @route    GET api/Competitions/UserCorrectAnswersCount/
// @desc   مجموع كل الاجوبة الخاطئة للمستخدم    Get competitions by articleid
// @access   Private مجموع الاجوبة الخاطئة 
router.get('/UserWrongAnswersCount/:user', auth, async (req, res) => {
  try {
    const posts = await Answer.find({ choosenAnswer:'no',user: req.params.user})
    .sort({ date: -1 }) 
    ;
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


module.exports = router;
