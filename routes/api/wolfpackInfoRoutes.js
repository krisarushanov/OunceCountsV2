const wolfpackInfoController = require('../../controllers/wolfpackInfoController');

const router = require('express').Router();

// Matches with "/api/wolfpackInfo"
router
  .route('/')
  .get(wolfpackInfoController.findWolfpackById)

// Matches with "/api/wolfpackInfo/:id"
router
  .route('/:id')
  .get(wolfpackInfoController.findWpBackpackById)
  .get(wolfpackInfoController.findUserById)
  .get(wolfpackInfoController.findWolfPackMemberById);


module.exports = router;