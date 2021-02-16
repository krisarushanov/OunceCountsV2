const router = require("express").Router();
const wolfpack_backpack_nonAlphaContoller = require("../controllers/wolfpack_backpack_nonAlphaContoller");

// Matches with "/wolfpack_backpack_nonAlpha"
router
  .route("/")
  .get(wolfpack_backpack_nonAlphaContoller.findAll)
  .post(wolfpack_backpack_nonAlphaContoller.create);

// Matches with "/wolfpack_backpack_nonAlpha/:id"
router
  .route("/backpack_id")
  //user can GET wolfpack_backpack_nonAlpha resource
  .get(wolfpack_backpack_nonAlphaContoller.findById)
  //user can UPDATE wolf_backpack_nonAlpha resource
  .put(wolfpack_backpack_nonAlphaContoller.update)
  //.delete(backpackController.remove);

module.exports = router;
