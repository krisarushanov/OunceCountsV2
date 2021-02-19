const router = require("express").Router();
const alphapackRoutes = require("./alphapack")

// Post routes

//alpha wolfpack routes
router.use("/alphapack", alphapackRoutes)

module.exports = router;
