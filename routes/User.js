const express = require('express');
const userController = require('../controllers/User')
const router = express.Router();// create a router


router.post('/userDetails', userController.createUser);// POST /feed/post will be handled right now
module.exports = router;// export the router