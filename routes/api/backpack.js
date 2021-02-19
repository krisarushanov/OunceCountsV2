const router = require("express").Router();
const backpackController = require("../../controllers/backpackController");

// Matches with "/backpack"
router
  .route("/")
  .get(backpackController.findAll)
  .post(backpackController.create);

// Matches with "/backpack/:id"
router
  .route("/:id")
  // user can GET backpack (request resouce)
  .get(backpackController.findById)
  // user can UPDATE backpack
  .put(backpackController.update)
  // user can DELETE backpack
  .delete(backpackController.remove);

module.exports = router;
