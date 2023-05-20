var express = require('express');
var router = express.Router();

const userController = require('../controllers/userController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index.ejs');
});

// @route    GET api/users
// @desc     Get all users
// @access   Public
router.get('/profile/2', async function(req, res, next) {
  try {
    const users = await userController.getUsers();
    res.render('button.ejs', { users });
  } catch (error) {
    next(error);
  }
});




router.get('/', userController.getUsers);

module.exports = router;
