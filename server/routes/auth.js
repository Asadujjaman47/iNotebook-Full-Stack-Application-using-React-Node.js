const express = require("express");
const router = express.Router();
const User = require("../models/User");
const { body, validationResult } = require("express-validator");
const bcrypt = require("bcryptjs");
const jwt = require('jsonwebtoken');

const JWT_SECRET = process.env.JWT_SECRET;

// router.get('/', (req, res) => {
//     console.log(req.body);
//     res.send("Hello");

// })

// Create a User using: POST "/api/auth/createuser". No login required
router.post(
  "/createuser",
  [
    // body('name').isLength({min: 3}),
    body("name", "Enter a valid name").isLength({ min: 3 }),
    body("email", "Enter a valid email").isEmail(),
    body("password", "Password must be atleast 4 charecters").isLength({
      min: 5,
    }),
  ],
  async (req, res) => {
    // console.log(req.body);
    // const user = User(req.body);
    // user.save();
    // res.send(req.body);

    // If there are erros, return Bad request and the erros
    const erros = validationResult(req);
    if (!erros.isEmpty()) {
      return res.status(400).json({ erros: erros.array() });
    }

    // CHeck wheather the user with this email exists already
    try {
      let user = await User.findOne({ email: req.body.email });
      
      if (user) {
        return res
          .status(400)
          .json({ error: "Sorry a user with this email already exists" });
      }

      const salt = await bcrypt.genSalt(10);
      const secPass = await bcrypt.hash(req.body.password, salt);

      user = await User.create({
        name: req.body.name,
        email: req.body.email,
        password: secPass,
      });
    //   res.json(user);
    
    const data = {
        user : {
            id: user.id
        }
    }
    const authtoken = jwt.sign(data, JWT_SECRET);
    // console.log(authtoken);
    res.json(authtoken);
      
    } catch (error) {
      console.log(error.message);
      res.status(500).send("Some Error occured");
    }
  }
);

module.exports = router;
