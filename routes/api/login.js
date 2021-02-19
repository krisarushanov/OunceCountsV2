const router = require("express").Router();
const loginController = require("../../controllers/loginControllers");

router.route("/")
  .get(loginController.findAll)
  .post(loginController.create);

router
  .route("/:id")
  .get(loginController.findById)
  .put(loginController.update)
  .delete(loginController.remove);

module.exports = router;

// query of the email and password
// get "/api/login" query of the email and password
// POST "/api/user"

