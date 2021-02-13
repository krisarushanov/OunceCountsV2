const router = require("express").Router();
const alphapackController = require("../../controllers/alphapackController");

// Matches with "/api/posts"
router
  .route("/")
  .get(alphapackController.findAll)
  .post(alphapackController.create);

// Matches with "/api/posts/:id"
router
  .route("/:id")
  .get(alphapackController.findById)
  .put(alphapackController.update)
  .delete(alphapackController.remove);

router
  .get("/", function(req, res) {
  console.log("HELLO");
});

module.exports = router;
