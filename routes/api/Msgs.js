const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
//const gravatar = require('gravatar');
//const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');
const Contact = require('../../models/Msg');
 

router.get('/', auth, async (req, res) => {
  try {
    const contact = await Contact.find().sort({ date: -1 });
    res.json(contact);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});


  
// @route    POST api/users
// @desc     Register user
// @access   Public
router.post(
  '/',
  [
    auth,
    [
      check('email', 'Text is required')
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
     

      const newPost = new Contact({
        name: req.body.name,
        email: req.body.email,
        title: req.body.title,
        msg: req.body.msg,
         
      });

      const post = await newPost.save();

      res.json(post);
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server Error');
    }
  }
);

router.route('/:id').delete((req, res) => {
  Contact.findByIdAndDelete(req.params.id)
  .then(() => res.json('Contact deleted.'))
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
      contact.name = req.body.name;
      contact.email = req.body.email;
      contact.title = req.body.title;
      contact.msg = req.body.msg;
      
      // luminaries.duration = Number(req.body.duration);
      // luminaries.date = Date.parse(req.body.date);

      contact.save()
        .then(() => res.json('contact updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

  

module.exports = router;
