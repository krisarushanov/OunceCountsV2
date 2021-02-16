const express = require('express');
const wolfpacksController = require('../../controllers/wolfpacksController');
const usersController = require('../../controllers/usersController');
const backpacksController = require('../../controllers/backpacksController');
const router = express.Router();

// create a wolfpack
router.post('/api/wolfpack', wolfpacksController.create);

// retrieve all the wolfpacks the user is in
router.get('/api/user/:id/wolfpack', (req, res) => {
  
})

module.exports = router;

