const User = require("../models/User");

exports.createUser = (req, res, next) => {
    // get post's title and content from the request
    const user = new User({
        email: req.body.email,
        password: req.body.password,
        OTP: ""
    })

    user.save().then(userSaved => {
        res.status(200).json({
            message: 'User created successfully!',
            user: userSaved
          });
    })
    
    
  }