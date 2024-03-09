const express = require('express');
const updateController = require('../controllers/UpdateUser')
const router = express.Router();// create a router


router.patch('/updateDetails', updateController.updateUser);// POST /feed/post will be handled right nowz
module.exports = router;// export the router