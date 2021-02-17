let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuid/v4'),
    router = express.Router();
    const auth = require('../../middleware/auth');
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

// User model
let Luminaries = require('../../models/Luminaries');
 
  
router.get('/', auth, async (req, res) => {
    try {
      const luminaries = await Luminaries.find().sort({ L_date: -1 });
      res.json(luminaries);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });

 
  router.get('/show', async (req, res) => {
    try {
      const luminaries = await Luminaries.find().sort({ L_date: -1 });
      res.json(luminaries);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });



 

router.post('/', upload.single('L_Img'),async(req, res, next) => {
    //const url = req.protocol + '://' + req.get('host')
    //const url = 'https://s-rf-heroku.herokuapp.com'
    // const url = 'https://s-rf-heroku.herokuapp.com'
    //const user = await User.findById(req.user.id).select('-password');

      // Upload image to clou dinary
    const result = await cloudinary.uploader.upload(req.file.path);
    
    const luminaries = new Luminaries({
 
        _id: new mongoose.Types.ObjectId(),
        L_Img:result.secure_url,
        // L_Img: url + '/public/' + req.file.filename,
        L_name: req.body.L_name,
        L_specialty: req.body.L_specialty,
        L_contribution: req.body.L_contribution,
        L_date: req.body.L_date,
        L_Website: req.body.L_Website,
        L_biography: req.body.L_biography
 
    });
    luminaries.save().then(result => {
        res.status(201).json({
            message: "luminaries added successfully!",
            luminariesCreated: {

         _id: result._id,
         L_name: result.L_name,
         L_specialty: result.L_specialty,
         L_contribution: result.L_contribution,
         L_date: result.L_date,
         L_Website: result.L_Website,
         L_biography: result.L_biography,
         L_Img: result.L_Img

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
    Luminaries.findByIdAndDelete(req.params.id)
    .then(() => res.json('luminaries deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

 

router.route('/:id').get((req, res) => {
    Luminaries.findById(req.params.id)
      .then(luminaries => res.json(luminaries))
      .catch(err => res.status(400).json('Error: ' + err));
  });


  
  

  
router.route('/EditLuminariesImg/:id').post(upload.single('L_Img'),async(req, res) => {
  //const url = req.protocol + '://' + req.get('host')
  //const url = 'https://s-rf-heroku.herokuapp.com'
  // const url = 'https://s-rf-heroku.herokuapp.com'
    // Upload image to clou dinary
    const result = await cloudinary.uploader.upload(req.file.path);
 
  Luminaries.findById(req.params.id)
    .then(luminaries => {
      luminaries.L_name = req.body.L_name;   
      luminaries.L_Img = result.secure_url;
      // luminaries.L_Img = url + '/public/' + req.file.filename;

      luminaries.save()
        .then(() => res.json('luminaries image updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});



//************************************************************************ */


 

router.route('/update/:id').post((req, res) => {
    Luminaries.findById(req.params.id)
      .then(luminaries => {
        luminaries.L_name = req.body.L_name;
        luminaries.L_specialty = req.body.L_specialty;
        luminaries.L_contribution = req.body.L_contribution;
        luminaries.L_date = req.body.L_date;
        luminaries.L_Website = req.body.L_Website;
        luminaries.L_biography = req.body.L_biography;
        // luminaries.duration = Number(req.body.duration);
        // luminaries.date = Date.parse(req.body.date);
        
        luminaries.save()
          .then(() => res.json('luminaries updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });
 
 

module.exports = router;
