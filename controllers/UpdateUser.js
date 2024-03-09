const User = require("../models/User");

exports.updateUser = async (req, res, next) => {
    // get post's title and content from the request
    const userId = req.body.userId
    const user = await User.findById(userId);

    user.OTP = req.body.OTP

    user.save().then(userSaved => {
        res.status(200).json({
            message: 'User OTP updated successfully!',
            user: userSaved
          });
    })
    
    
  }