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
let Contact = require('../../models/Contact ');


router.get('/', auth, async (req, res) => {
    try {
      const contact = await Contact.find().sort({ date: -1 });
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });


  router.get('/show', async (req, res) => {
    try {
      const contact = await Contact.find().sort({ date: -1 });
      res.json(contact);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  });





router.post('/', (req, res, next) => {
   // const url = req.protocol + '://' + req.get('host')
    const contact = new Contact({

        
       // L_Img: url + '/public/' + req.file.filename,
       _id: new mongoose.Types.ObjectId(),
       c_name: req.body.c_name,
       c_mail: req.body.c_mail,
       c_channel: req.body.c_channel,
       c_subject: req.body.c_subject,
       c_massage: req.body.c_massage,
       c_date: req.body.c_date



    });
    contact.save().then(result => {
        res.status(201).json({
            message: "contact added successfully!",
            contactCreated: {
 
         _id: result._id,
        c_name: result.c_name,
        c_mail: result.c_mail,
        c_channel: result.c_channel,
        c_subject: result.c_subject,
        c_massage: result.c_massage,
        c_date: result.c_date
         

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
    Contact.findByIdAndDelete(req.params.id)
    .then(() => res.json('contact deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});



router.route('/:id').get((req, res) => {
    Contact.findById(req.params.id)
      .then(contact => res.json(contact))
      .catch(err => res.status(400).json('Error: ' + err));
  });



  
router.route('/update/:id').post((req, res) => {
    Contact.findById(req.params.id)
      .then(contact => {
        contact.c_name = req.body.c_name;
        contact.c_mail = req.body.c_mail;
        contact.c_channel = req.body.c_channel;
        contact.c_subject = req.body.c_subject;
        contact.c_massage = req.body.c_massage;
        contact.c_date = req.body.c_date;
         
        // luminaries.duration = Number(req.body.duration);
        // luminaries.date = Date.parse(req.body.date);
  
        contact.save()
          .then(() => res.json('contact updated!'))
          .catch(err => res.status(400).json('Error: ' + err));
      })
      .catch(err => res.status(400).json('Error: ' + err));
  });



module.exports = router;
