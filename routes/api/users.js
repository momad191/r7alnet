const express = require('express');
const router = express.Router();
const gravatar = require('gravatar');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const config = require('config');
const multer = require('multer'); 
const uuidv4 = require('uuid/v4');
const mongoose = require('mongoose');
const auth = require('../../middleware/auth');
const DIR = './public/';
const cloudinary = require('cloudinary').v2;
    
const { check, validationResult } = require('express-validator/check');
 
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
      if (file.mimetype == "image/png" || file.mimetype == "image/jpg" || file.mimetype == "image/jpeg" || file.mimetype == "application/pdf" || file.mimetype == "application/msword" || file.mimetype == "application/vnd.openxmlformats-officedocument.wordprocessingml.document") {
          cb(null, true);
      } else {
          cb(null, false);
          return cb(new Error('Only .png, .jpg  .pdf and .jpeg format allowed!'));
      }
  }
});

 
const User = require('../../models/User');
const Post = require('../../models/Post');

router.get('/', auth, async (req, res) => {
  try {
    const user = await User.find();
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

 
//******************************************************************** */

 


router.route('/:id').get((req, res) => {
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => res.status(400).json('Error: ' + err));
});



 
//----------------------------------------
router.get('/refuserCount/:refuser', auth, async (req, res) => {
  try {
    const posts = await User.find({  refuser: req.params.refuser})
    .sort({ date: -1 })
    .populate('categories', ['body', 'text']);
     
    ;
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
//----------------------------------------
//----------------------------------------
router.get('/commentsCount/:user', auth, async (req, res) => {
  try {
    const posts = await Post.find({ user: req.params.user})
    .sort({ date: -1 })
    .populate('categories', ['body', 'text']);
     
    ;
    res.json(posts);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
//----------------------------------------
//----------------------------------------


//******************************old updat picture ************************************** */
 

// router.route('/EdituserImg/:id').post(upload.single('avatar'),auth,(req, res) => {
//   //const url = req.protocol + '://' + req.get('host')
  
//   const url = 'https://s-rf-heroku.herokuapp.com'
//    //const url = 'http://localhost:5000'
//   User.findById(req.params.id)
  
//     .then(user => {
//       user.name = req.body.name;   
//       user.avatar = url + '/public/' + req.file.filename;

//       user.save()
//         .then(() => res.json('User image updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));

// });

  
 
//************************************************************************ */
 
router.route('/update/:id').post((req, res) => {
  User.findById(req.params.id)
    .then(user => {
      user.name = req.body.name;
      user.email = req.body.email;
      user.password = req.body.password;
      user.validity = req.body.validity;
      user.avatar = req.body.avatar;
      user.refuser = req.body.refuser;
    
      // luminaries.L_contribution = req.body.L_contribution;
      // luminaries.L_date = req.body.L_date;
      // luminaries.L_Website = req.body.L_Website;
      // luminaries.L_biography = req.body.L_biography;
      // luminaries.duration = Number(req.body.duration);
      // luminaries.date = Date.parse(req.body.date);
      
      user.save()
        .then(() => res.json('User Updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



//******************************************************************** */
 
 
router.route('/Editusercv/:id').post(upload.single('cv'),auth, async (req,res) => {
  // const url = req.protocol + '://' + req.get('host')
 // const url = 'http://localhost:5000'
 
  // const url = 'https://s-rf-heroku.herokuapp.com'

    // // Upload image to clou dinary
    const result = await cloudinary.uploader.upload(req.file.path);
 
  User.findById(req.params.id)
    .then(user => {
      user.name = req.body.name;   
      user.cv = result.secure_url;
      // user.cv = url + '/public/' + req.file.filename;

      user.save()
        .then(() => res.json('User cv updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

  

//************************************************************************ */






// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, validity,} = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }
 
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });
 
      user = new User({
        name,
        email,
        avatar,
        password,
        validity,
        
        // refuser,
        
      });
  
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };
  
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

 
 

  
// router.route('/EdituserImg/:id').post((req, res) => {
//   User.findById(req.params.id)
//   .then(user => {
//     user.name = req.body.name;   
   
      
//       user.save()
//         .then(() => res.json('user updated!'))
//         .catch(err => res.status(400).json('Error: ' + err));
//     })
//     .catch(err => res.status(400).json('Error: ' + err));
// });


// ------------------------------------------------------------------------------------


// @route    POST api/profile
// @desc     Create or update user profile
// @access   Private
router.post(
  '/edituser1',
  [
    auth,
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      name,
      avatar,
     // country,
      // bio,
      // status,
      // githubusername,
      // skills,
      // youtube,
      // facebook,
      // twitter,
      // instagram,
      // linkedin,
      // github,
      // stackoverflow,
      // researchgate,
      // orcid,
      // department
    } = req.body;
 
    // Build profile object
    const profileFields = {};
    profileFields.user = req.user.id;
    if (name) profileFields.name = name;
    if (avatar) profileFields.avatar = avatar;
     
    // if (department) profileFields.department = department;
    // if (location) profileFields.location = location;
    // if (bio) profileFields.bio = bio;
    // if (status) profileFields.status = status;
    // if (githubusername) profileFields.githubusername = githubusername;
    // if (skills) {
    //   profileFields.skills = skills.split(',').map(skill => skill.trim());
    // }



    // Build social object
    // profileFields.social = {};
    // if (youtube) profileFields.social.youtube = youtube;
    // if (twitter) profileFields.social.twitter = twitter;
    // if (facebook) profileFields.social.facebook = facebook;
    // if (linkedin) profileFields.social.linkedin = linkedin;
    // if (instagram) profileFields.social.instagram = instagram;
    // if (github) profileFields.social.github = github;
    // if (stackoverflow) profileFields.social.stackoverflow = stackoverflow;
    // if (researchgate) profileFields.social.researchgate = researchgate;
    // if (orcid) profileFields.social.orcid = orcid;
    // if (website) profileFields.social.website = website;
     

    try {
      // Using upsert option (creates new doc if no match is found):
      let profile = await User.findOneAndUpdate(
        { _id: req.user.id },
        { $set: profileFields },
        { new: true, upsert: true }
      );
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
); 
  



router.get('/me', auth, async (req, res) => {
  try {
    const user = await User.findOne({ user: req.user.id })
    .populate(
      'user',
      ['name', 'avatar']
    );

    if (!user) {
      return res.status(400).json({ msg: 'There is no user ' });
    }

    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});
 





// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/refuser',
  [
    check('name', 'Name is required')
      .not()
      .isEmpty(),
    check('email', 'Please include a valid email').isEmail(),
    check(
      'password',
      'Please enter a password with 6 or more characters'
    ).isLength({ min: 6 })
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, validity,refuser } = req.body;

    try {
      let user = await User.findOne({ email });

      if (user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'User already exists' }] });
      }
 
      const avatar = gravatar.url(email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      user = new User({
        name,
        email,
        avatar,
        password,
        validity,
        refuser,
        
      });
  
      const salt = await bcrypt.genSalt(10);

      user.password = await bcrypt.hash(password, salt);

      await user.save();

      const payload = {
        user: {
          id: user.id
        }
      };
  
      jwt.sign(
        payload,
        config.get('jwtSecret'),
        { expiresIn: 360000 },
        (err, token) => {
          if (err) throw err;
          res.json({ token });
        }
      );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
    }
  }
);

module.exports = router;
