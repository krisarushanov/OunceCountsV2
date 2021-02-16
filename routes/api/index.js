const router = require("express").Router();
const postRoutes = require("./posts");
const alphapackRoutes = require("./alphapack")

// Post routes
router.use("/posts", postRoutes);

//alpha wolfpack routes
router.use("/alphapack", alphapackRoutes)



module.exports = router;
