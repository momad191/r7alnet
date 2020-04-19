let express = require('express'),
    multer = require('multer'),
    mongoose = require('mongoose'),
    uuidv4 = require('uuid/v4'),
    router = express.Router();

    let Image = require('../../models/User');

    router.get('/', async (req, res) => {
        try {
          const image = await Image.find().sort({ title: -1 });
          res.json(image);
        } catch (err) {
          console.error(err.message);
          res.status(500).send('Server Error');
        }
      });
      


module.exports = router;