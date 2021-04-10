const router = require("express").Router();
const wolfpackInfoRoutes = require("./wolfpackInfoRoutes");
const alphapackRoutes = require("./alphapack");
// const userRoutes = require("./user");
const wolfpackBackpackRoutes = require("./backpack");


//alpha wolfpack routes
router.use("/wolfpackInfo", wolfpackInfoRoutes);
// define user routes
// router.use("/user", userRoutes);
// define wolfpack-backpack-routes routes
router.use("/backpack", wolfpackBackpackRoutes);


module.exports = router;
