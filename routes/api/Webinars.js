let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuid/v4'),
    router = express.Router();
    const auth = require('../../middleware/auth');
    const DIR = './public/';
 

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

// User model
let Webinar = require('../../models/Webinar');


router.get('/', auth, async (req, res) => {
    try {
      const webinar = await Webinar.find().sort({ date: -1 });
      res.json(webinar);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


 


router.post('/', upload.single('WebinarImg'), (req, res, next) => {
    //const url = req.protocol + '://' + req.get('host')
    const url = 'https://s-rf-heroku.herokuapp.com'
    const webinar = new Webinar({

        _id: new mongoose.Types.ObjectId(),
         Surname: req.body.Surname,
         first_name: req.body.first_name,
         Title: req.body.Title,
         Gender: req.body.Gender,
         Email: req.body.Email,
         Website: req.body.Website,
         Phone: req.body.Phone,
         Academic_affiliation: req.body.Academic_affiliation,
         Country: req.body.Country,
         Nationality: req.body.Nationality,
         Key_academic: req.body.Key_academic,
         Research_Field: req.body.Research_Field,
         Specialization: req.body.Specialization,
         Potential_talk_title: req.body.Potential_talk_title,
         other_information: req.body.other_information,
         date: req.body.date,
         WebinarImg: url + '/public/' + req.file.filename



    });
    webinar.save().then(result => {
        res.status(201).json({
            message: "webinar added successfully!",
            webinarCreated: {
 
         _id: result._id,
         Surname: result.Surname,
         first_name: result.first_name,
         Title: result.Title,
         Gender: result.Gender,
         Email: result.Email,
         Website: result.Website,
         Phone: result.Phone,
         Academic_affiliation: result.Academic_affiliation,
         Country: result.Country,
         Nationality: result.Nationality,
         Key_academic: result.Key_academic,
         Research_Field: result.Research_Field,
         Specialization: result.Specialization,
         Potential_talk_title: result.Potential_talk_title,
         other_information: result.other_information,
         date: result.date,
         WebinarImg: result.WebinarImg
 
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})

 
router.route('/:id').delete((req, res) => {
    Webinar.findByIdAndDelete(req.params.id)
    .then(() => res.json('Webinar deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/:id').get((req, res) => {
    Webinar.findById(req.params.id)
      .then(webinar => res.json(webinar))
      .catch(err => res.status(400).json('Error: ' + err));
  });



  
router.route('/EditwebinarsImg/:id').post(upload.single('WebinarImg'),(req, res) => {
    //const url = req.protocol + '://' + req.get('host')
    const url = 'https://s-rf-heroku.herokuapp.com'
    Webinar.findById(req.params.id)
      .then(webinar => {
        webinar.Surname = req.body.Surname;
        webinar.first_name = req.body.first_name;
        // webinar.Title = req.body.Title;
        // webinar.Gender = req.body.Gender;
        // webinar.Email = req.body.Email;
        // webinar.Website = req.body.Website;
        // webinar.Academic_affiliation = req.body.Academic_affiliation;
        // webinar.Country = req.body.Country;
        // webinar.Nationality = req.body.Nationality;
        // webinar.Key_academic = req.body.Key_academic;
        // webinar.Research_Field = req.body.Research_Field;
        // webinar.Specialization = req.body.Specialization;
        // webinar.Potential_talk_title = req.body.Potential_talk_title;
        // webinar.other_information = req.body.other_information;
        // webinar.date = req.body.date;
        webinar.WebinarImg = url + '/public/' + req.file.filename;
         
        // webinar.duration = Number(req.body.duration);
        // webinar.date = Date.parse(req.body.date);
  
        webinar.save()
          .then(() => res.json('webinar updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });



  //************************************************************************ */

    
router.route('/update/:id').post((req, res) => {
    Webinar.findById(req.params.id)
      .then(webinar => {
        webinar.Surname = req.body.Surname;
        webinar.first_name = req.body.first_name;
        webinar.Title = req.body.Title;
        webinar.Gender = req.body.Gender;
        webinar.Email = req.body.Email;
        webinar.Website = req.body.Website;
        webinar.Phone = req.body.Phone;
        webinar.Academic_affiliation = req.body.Academic_affiliation;
        webinar.Country = req.body.Country;
        webinar.Nationality = req.body.Nationality;
        webinar.Key_academic = req.body.Key_academic;
        webinar.Research_Field = req.body.Research_Field;
        webinar.Specialization = req.body.Specialization;
        webinar.Potential_talk_title = req.body.Potential_talk_title;
        webinar.other_information = req.body.other_information;
        webinar.date = req.body.date;
        //webinar.WebinarImg = url + '/public/' + req.file.filename;
          
        // webinar.duration = Number(req.body.duration);
        // webinar.date = Date.parse(req.body.date);
  
        webinar.save()
          .then(() => res.json('webinar updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });



module.exports = router;















// const express = require('express');
// const router = express.Router();
// const { check, validationResult } = require('express-validator/check');
// const auth = require('../../middleware/auth');

// const Webinar = require('../../models/Webinar');
// const Profile = require('../../models/Profile');
// const User = require('../../models/User');

// // @route    POST api/webinars
// // @desc     Create a webinars
// // @access   Private
// router.post(
//   '/',
//   [
//     auth,
//     [
//       check('text', 'Text is required')
//         .not()
//         .isEmpty()
//     ]
//   ],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//       const user = await User.findById(req.user.id).select('-password');

//       const newWebinar = new Webinar({
//         Surname: req.body.Surname,
//         first_name: req.body.first_name,
//         Title: req.body.Title,
//         Gender: req.body.Gender,
//         Email: req.body.Email,
//         Website: req.body.Website,
//         Phone: req.body.Phone,
//         Academic_affiliation: req.body.Academic_affiliation,
//         Country: req.body.Country,
//         Nationality: req.body.Nationality,
//         Key_academic: req.body.Key_academic,
//         Research_Field: req.body.Research_Field,
//         Specialization: req.body.Specialization,
//         Potential_talk_title: req.body.Potential_talk_title,
//         other_information: req.body.other_information,
//         date: req.body.date,
//         WebinarImg: req.body.WebinarImg,

//        // name: user.name,
//        // avatar: user.avatar,
//        // user: req.user.id

//       });

//       const webinar = await newWebinar.save();

//       res.json(webinar);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send('Server Error');
//     }
//   }
// );

// // @route    GET api/webinars
// // @desc     Get all webinars
// // @access   Private
// router.get('/allwebinars', auth, async (req, res) => {
//   try {
//     const allwebinars = await Webinar.find().sort({ date: -1 });
//     res.json(allwebinars);
//   } catch (err) {
//     console.error(err.message);
//     res.status(500).send('Server Error');
//   }
// });

// // @route    GET api/webinars/:id
// // @desc     Get webinars by ID
// // @access   Private
// router.get('/webinar/:id', auth, async (req, res) => {
//   try {
//     const webinar = await Webinars.findById(req.params.id);

//     // Check for ObjectId format and post
//     if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !webinar) {
//       return res.status(404).json({ msg: 'Post not found' });
//     }

//     res.json(webinar);
//   } catch (err) {
//     console.error(err.message);

//     res.status(500).send('Server Error');
//   }
// });

// // @route    DELETE api/webinars/:id
// // @desc     Delete a webinars
// // @access   Private
// router.delete('/allwebinars/:id', auth, async (req, res) => {
//   try {
//     const webinar = await Webinar.findById(req.params.id);

//     // Check for ObjectId format and post
//     if (!req.params.id.match(/^[0-9a-fA-F]{24}$/) || !webinar) {
//       return res.status(404).json({ msg: 'Post not found' });
//     }

//     // Check user
//     if (webinar.user.toString() !== req.user.id) {
//       return res.status(401).json({ msg: 'User not authorized' });
//     }

//     await webinar.remove();

//     res.json({ msg: 'Post removed' });
//   } catch (err) {
//     console.error(err.message);

//     res.status(500).send('Server Error');
//   }
// });


// module.exports = router;
