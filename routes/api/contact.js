const express = require('express');
const router = express.Router();
const auth = require('../../middleware/auth');
//const gravatar = require('gravatar');
//const bcrypt = require('bcryptjs');
//const jwt = require('jsonwebtoken');
const config = require('config');
const { check, validationResult } = require('express-validator/check');

const Contact = require('../../models/contact');



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
      // check('name', 'Name is required').not().isEmpty(),
      // check('channel', 'channel is required').not().isEmpty(),
      // check('subject', 'subject is required').not().isEmpty(),
      // check('msg', 'msg is required').not().isEmpty(),
      check('email', 'Please include a valid email').isEmail(),
  ], 
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email } = req.body;

    try {
    //  let user = await User.findOne({ email });

      // if (user) {
      //   return res
      //     .status(400)
      //     .json({ errors: [{ msg: 'User already exists' }] });
      // }
 
      // const avatar = gravatar.url(email, {
      //   s: '200',
      //   r: 'pg',
      //   d: 'mm'
      // });

      contact = new Contact({
        email,
       
      });

    //  const salt = await bcrypt.genSalt(10);

     // user.password = await bcrypt.hash(password, salt);

      await contact.save();

      // const payload = {
      //   user: {
      //     id: user.id
      //   }
      // };
 
      // jwt.sign(
      //   payload,
      //   config.get('jwtSecret'),
      //   { expiresIn: 360000 },
      //   (err, token) => {
      //     if (err) throw err;
      //     res.json({ token });
      //   }
      // );
    } catch (err) {
      console.error(err.message);
      res.status(500).send('Server error');
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
      contact.channel = req.body.channel;
      contact.subject = req.body.subject;
      contact.msg = req.body.msg;
      contact.date = req.body.date;
      // luminaries.duration = Number(req.body.duration);
      // luminaries.date = Date.parse(req.body.date);

      contact.save()
        .then(() => res.json('contact updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

  

module.exports = router;
