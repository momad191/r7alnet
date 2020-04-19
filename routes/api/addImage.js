let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuid/v4'),
    router = express.Router();

    const DIR = './public';
 

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
let Image = require('../../models/User');

router.post('/', upload.single('profileImg'), (req, res, next) => {
    const url = req.protocol + '://' + req.get('host')
    const image = new Image({
     _id: new mongoose.Types.ObjectId(),
      title: req.body.title,
      profileImg: url + '/public/' + req.file.filename
    });
    image.save().then(result => {
        res.status(201).json({
            message: "User registered successfully!",
            imageCreated: {
                _id: result._id,
                profileImg: result.profileImg,
                title:result.title
            }
        })
    }).catch(err => {
        console.log(err),
            res.status(500).json({
                error: err
            });
    })
})



module.exports = router;
