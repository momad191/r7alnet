const express = require('express');
const router = express.Router();
const crypto = require('crypto')
const bcrypt = require('bcryptjs');
const auth = require('../../middleware/auth');
const jwt = require('jsonwebtoken');
//const {JWT_SECRET} = require('../config/keys');
const nodemailer = require('nodemailer');
//const sendgridTransport = require('nodemailer-sendgrid-transport')
const config = require('config');
const { check, validationResult } = require('express-validator/check');
//const {SENDGRID_API,EMAIL} = require('../config/keys')


var transporter = nodemailer.createTransport({
  service: 'gmail',
  //port: 587,
  //secure: false,
  auth: {
    user: 'researchers.archive@gmail.com',
    pass: '#srf4191933!'
   // pass: '&U4}a$JKly[j'
  }
   
});

 
 

const User = require('../../models/User');

// @route    GET api/auth
// @desc     Test route
// @access   Public
router.get('/', auth, async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select('-password');
    res.json(user);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
});

// @route    POST api/auth
// @desc     Authenticate user & get token
// @access   Public
router.post(
  '/',
  [
    check('email', 'Please include a valid email').isEmail(),
    check('password', 'Password is required').exists()
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;

    try {
      let user = await User.findOne({ email });

      if (!user) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

      const isMatch = await bcrypt.compare(password, user.password);

      if (!isMatch) {
        return res
          .status(400)
          .json({ errors: [{ msg: 'Invalid Credentials' }] });
      }

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



router.post('/reset-password',(req,res)=>{
  crypto.randomBytes(32,(err,buffer)=>{
      if(err){
          console.log(err)
      }
     
      const token = buffer.toString("hex")
      User.findOne({email:req.body.email})
      .then(user=>{
          if(!user){
              return res.status(422).json({error:"User dont exists with that email"})
          }
          user.resetToken = token
          user.expireToken = Date.now() + 3600000
          user.save().then((result)=>{
              transporter.sendMail({
                  to:user.email,
                  from:"researchers.archive@gmail.com",
                  subject:"From Sudanese Researchers Website To Reset your Password",
                  html:`
                  <p>You requested for password reset</p>
                  <h5>click in this <a href="https://s-rf-heroku.herokuapp.com/Newpassword/${user.id}">link</a> to reset password</h5>
                  <p>Thank you </p>
                  `
              })
              res.json({message:"check your email"})
          })

      })
  })
}) 

 
 



 

router.route('/new-password/:id').post((req, res) => {

  const newPassword = req.body.password
  const sentToken = req.body.token
  // User.findOne({resetToken:sentToken,expireToken:{$gt:Date.now()}})
  User.findById(req.params.id)
  .then(user=>{
      if(!user){
          return res.status(422).json({error:"Try again session expired"})
      }
      bcrypt.hash(newPassword,12).then(hashedpassword=>{
         user.password = hashedpassword
         user.resetToken = undefined
         user.expireToken = undefined
         user.save().then((saveduser)=>{
             res.json({message:"password updated success"})
         })
      })
  }).catch(err=>{
      console.log(err)
  })

})




module.exports = router;
