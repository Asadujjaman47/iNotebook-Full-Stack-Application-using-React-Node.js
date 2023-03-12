const express = require('express');
const router = express.Router();
const User = require('../models/User');
const {body, validationResult} = require('express-validator');

// router.get('/', (req, res) => {
//     console.log(req.body);
//     res.send("Hello");
    
// })


// Create a User using: POST "/api/auth". Doesn't require Auth
router.post('/', [
    // body('name').isLength({min: 3}),
    body('name', "Enter a valid name").isLength({min: 3}),
    body('email', "Enter a valid email").isEmail(),
    body('password', "Password must be atleast 4 charecters").isLength({min: 5}),
], (req, res) => {
    // console.log(req.body);
    // const user = User(req.body);
    // user.save();
    // res.send(req.body);

    const erros = validationResult(req);
    if(!erros.isEmpty()){
        return res.status(400).json({erros: erros.array()});
    } 

    User.create({
        username: req.body.name,
        email: req.body.email,
        password: req.body.password
    }).then(user => res.json(user))
        .catch(err=> {
            console.log(err);
            // res.json({error: 'Please enter a unique value for email'})
            res.json({error: 'Please enter a unique value for email', message: err.message})
        });
})



module.exports = router;