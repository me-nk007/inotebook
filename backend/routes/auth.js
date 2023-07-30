// We will be making API related to user authentication and make endpoints/Route

const express = require('express');
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchuser = require('../middleware/fetchuser')

const JWT_SECRET = "Harryisagoodb$oy";


// ROUTE 1 : Create a User using POST "api/auth/createuser". No Login Required
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({min : 3}),
    body('password', "Password must be atleast 5 characters").isLength({min : 5}),
    body('email', 'Enter a valid email').isEmail(),
], async(req, res)=>{
    // If there are errors, return bad request and the errors  
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
    // Check whether the user with this email exists already

    let user = await User.findOne({email: req.body.email});
    if (user){
      
      return res.status(400).json({error: "Sorry a user with this email already exists"})
    }

    const salt = await bcrypt.genSalt(10);
    const secPass = await bcrypt.hash(req.body.password, salt); 


    // Creating a new user manually
    user = await User.create({
        name: req.body.name,
        password: secPass,
        email: req.body.email,
      })
      const data = {
        user:{
          id : user.id
        }
      }
      const authtoken = jwt.sign(data, JWT_SECRET);

    res.json({authtoken});

    // Catch errors
  } catch (error) {
      console.error(error.message);
      res.status(500).send("Internal Server Error");

  }
})


// ROUTE 2 : Authenticate a User using POST "api/auth/login. No login required
router.post('/login', [
  body('email', 'Enter a valid email').isEmail(),
  body('password', "Password Cannot be blank").exists(),

], async(req, res)=> {

  // If there are errors, return bad request and the errors  
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    return res.status(400).json({ errors: errors.array() });
  }

  // Checking Email and Password entered by a user and compairing it with Database
  const {email, password} = req.body;
  try {
    let user = await User.findOne({email});
    if(!user){
      return res.status(400).json({Error : "Please try to login with correct Email"})
    }
    const passwordCompare = await bcrypt.compare(password, user.password);
    if(!passwordCompare){
      return res.status(400).json({Error : "Please try to login with correct Password"})
    }
    const data = {
      user:{
        id : user.id
      }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    res.json({authtoken});
  } catch (error) {
    console.error(error.message);
      res.status(500).send("Internal Server Error");
  }

})


// ROUTE 3 : Get logged in User Details using : POST "api/auth/getuser". Login required
router.post('/getuser', fetchuser,  async(req, res)=> {

try {
  userId = req.user.id;
  const user = await User.findById(userId).select("-password");
  res.send(user);
} catch (error) {
  console.error(error.message);
  res.status(500).send("Internal Server Error");
}
})


module.exports = router