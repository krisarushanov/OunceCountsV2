const router = require("express").Router();
const alphapackRoutes = require("./alphapack")


//alpha wolfpack routes
router.use("/alphapack", alphapackRoutes)



module.exports = router;
