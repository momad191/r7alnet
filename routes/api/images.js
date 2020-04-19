let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuid/v4'),
    router = express.Router();

const DIR = '../../public';

// User model
let Image = require('../../models/Images');

 

router.get("/images", (req, res, next) => {
    Image.find().then(data => {
        res.status(200).json({
            message: "User list retrieved successfully!",
            image: data
        });
    });
});

module.exports = router;
