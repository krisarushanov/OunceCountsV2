const wolfpacksIRunWithController = require('../../controllers/wolfpacksIRunWithController');
const router = require('express').Router();

// Matches with "/api/wolfpacksIRunWith"
router
  .route('/')
  .get(wolfpacksIRunWithController.findWolfpackById)
  .post(wolfpacksIRunWithController.createWolfpack);

// Matches with "/api/wolfpacksIRunWith/:id"
/*
router
  .route('/:id')
  .get(wolfpacksIRunWithController.findById)
  .put(wolfpacksIRunWithController.update);
*/
module.exports = router;

